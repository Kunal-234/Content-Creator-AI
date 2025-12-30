// Client helper: forward prompts to server API to avoid exposing API keys.
export async function generateFromServer(prompt: string) {
  try {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body?.error || `Server responded ${res.status}`)
    }

    const data = await res.json()
    return data?.text ?? ''
  } catch (err: any) {
    console.error('generateFromServer error:', err)
    throw err
  }
}
