
import { GoogleGenAI } from "@google/genai";
import { USER_DATA, PROJECTS, EXPERIENCES, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are the AI Assistant for Hammad Sheikh bin Nadeem. Your job is to answer questions about Hammad's work, experience, and his platform Internee.pk.

Hammad's Profile:
Name: ${USER_DATA.name}
Title: ${USER_DATA.title}
Bio: ${USER_DATA.bio}

Core Achievements:
- Founded Internee.pk, a major internship platform.
- Focus on community building and mentoring.
- Full-stack development expertise.

Experience Details:
${EXPERIENCES.map(e => `- ${e.title} at ${e.company} (${e.period}): ${e.achievements.join(' ')}`).join('\n')}

Key Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Tone: Professional, inspiring, and entrepreneurial. If asked about contact details, refer them to his email ${USER_DATA.email} or his social links.
`;

export async function askAssistant(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.6,
      },
    });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having a little trouble connecting to Hammad's knowledge base. Please try again later!";
  }
}
