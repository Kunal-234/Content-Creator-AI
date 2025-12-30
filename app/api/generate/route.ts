import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function POST(request: Request) {
  console.log('Available Env Keys:', Object.keys(process.env).filter(k => k.includes('GEMINI')));
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY ||''

  if (!apiKey) {
    return NextResponse.json({
      error:
        'Server missing GOOGLE_GEMINI_API_KEY or NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY. Set one in your .env file.',
      help: 'Ensure your API key is set in .env.',
    }, { status: 500 })
  }

  const { prompt } = await request.json().catch(() => ({ prompt: '' }))
  if (!prompt) {
    return NextResponse.json({ error: 'Missing prompt' }, { status: 400 })
  }

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

  const generationConfig = {
    maxOutputTokens: 8152,
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    responseMimeType: 'text/plain',
  }

  const maxAttempts = 3
  let attempt = 0

  while (attempt < maxAttempts) {
    try {
      const chat = model.startChat({ generationConfig, history: [] })
      const result = await chat.sendMessage(prompt)
      const text = result?.response?.text?.() ?? ''
      return NextResponse.json({ text })
    } catch (err: any) {
      attempt++
      const msg = (err && err.message) ? String(err.message) : ''

      // Helpful handling for common issues
      if (err?.status === 403 || msg.toLowerCase().includes("method doesn't allow unregistered callers") || msg.toLowerCase().includes('forbidden')) {
        console.error('AI server 403 (forbidden):', err)
        return NextResponse.json({
          error: '403 Forbidden: API caller identity not accepted',
          help: 'Ensure your server API key is set in NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY, the Generative AI API is enabled in Google Cloud, and billing is attached to the project. Also check API key restrictions (try removing restrictions while testing).',
          docs: 'https://ai.google.dev/gemini-api/docs/rate-limits',
        }, { status: 403 })
      }

      const isRateLimit = msg.includes('429') || msg.toLowerCase().includes('quota') || msg.toLowerCase().includes('rate limit')
      if (!isRateLimit) {
        console.error('AI server error:', err)
        return NextResponse.json({ error: 'AI server error', details: msg }, { status: 500 })
      }

      if (attempt >= maxAttempts) {
        console.error('AI rate limit, exhausted retries:', err)
        return NextResponse.json({ error: 'AI rate limit exceeded' }, { status: 429 })
      }

      const backoffMs = Math.pow(2, attempt) * 1000
      console.warn(`Rate limited by API, retrying in ${backoffMs}ms (attempt ${attempt}/${maxAttempts})`)
      await sleep(backoffMs)
    }
  }

  return NextResponse.json({ error: 'Unknown error' }, { status: 500 })
}
