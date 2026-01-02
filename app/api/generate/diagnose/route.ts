import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY || ''

  if (!apiKey) {
    return NextResponse.json({
      ok: false,
      error: 'Missing NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY (server-only env var).',
      help: 'Set NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY in your environment and restart the dev server.',
    })
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' })
    const chat = model.startChat({ generationConfig: { maxOutputTokens: 16, temperature: 0.0, responseMimeType: 'text/plain' }, history: [] })
    const result = await chat.sendMessage('ping')
    //@ts-ignore
    const text = result?.responseText ?? ''
    return NextResponse.json({ ok: true, text })
  } catch (err: any) {
    const message = (err && err.message) ? String(err.message) : String(err)
    return NextResponse.json({
      ok: false,
      error: 'Diagnostic call failed',
      message,
      status: err?.status,
      statusText: err?.statusText,
      errorDetails: err?.errorDetails,
      stack: err?.stack,
      help: 'If 403 Forbidden: ensure API key is valid, Generative AI is enabled in Google Cloud, and billing is attached. Check key restrictions (remove for testing).',
    })
  }
}
