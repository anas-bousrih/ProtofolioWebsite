import OpenAI from "openai";
import { portfolioData } from "../src/constants/portfolioData.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
  }

  let body = {};
  try {
    if (typeof req.body === "string") {
      body = JSON.parse(req.body || "{}");
    } else if (req.body) {
      body = req.body;
    } else {
      const raw = await readReqBody(req);
      body = raw ? JSON.parse(raw) : {};
    }
  } catch (e) {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const { question, audience = "general viewer" } = body;
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Missing question" });
  }

  const systemPrompt = `
You are the personal AI assistant for Anas Bousrih.
Your job is to answer questions from recruiters, admissions officers, and teachers about Anas’s experience, projects, skills, service, character, and goals.
Base all your answers strictly on the provided documents.

Tone:
- confident but humble
- clear and human
- honest about strengths
- focuses on real examples from his work and service

Never invent projects or achievements. Use only what is in the knowledge base.
When asked about strengths, show concrete examples.
When asked about weaknesses, be honest but positive.
If something is not in the data, say I'm still working on it.
  `.trim();

  const userContent = `
Here is my structured portfolio data:

${JSON.stringify(portfolioData, null, 2)}

Audience: ${audience}

User question:
${question}
  `.trim();

  try {
    const client = new OpenAI({ apiKey });
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userContent },
      ],
      max_tokens: 400,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({ answer: reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    return res.status(500).json({ error: "AI request failed", detail: err?.message || String(err) });
  }
}

function readReqBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}
