
import { GoogleGenerativeAI } from "@google/generative-ai"

// Create the client with your API key
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY || "")

// Get a model (pick one: "gemini-1.5-flash" or "gemini-1.5-pro")
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

// Optional config
const generationConfig = {
  maxOutputTokens: 8152,
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  responseMimeType:"text/plain"
}

// Create a chat session
export const chatSession = model.startChat({
  generationConfig,
  history: [], // start with empty history
})
