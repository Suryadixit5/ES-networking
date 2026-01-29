
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

const genAI = new GoogleGenerativeAI(apiKey);

export async function askSecurityAdvisor(question: string) {
  try {
    if (!apiKey) {
      throw new Error("Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your environment variables.");
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: "You are an AI Security Consultant for 'ES (Event Security System)', a company that provides expert security solutions. You provide professional advice on CCTV, Fire Safety, Access Control, and other security systems. Be professional, concise, and helpful. Always emphasize commitment to safety and customer satisfaction.",
    });

    const result = await model.generateContent(question);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }
}
