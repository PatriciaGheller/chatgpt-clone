// src/config/openai.js
const OpenAI = require("openai");

// suporta duas variações de nome de variável de ambiente e remove aspas se houver
const rawKey = process.env.OPENAI_API_KEY || process.env.OPEN_AI_KEY || process.env.OPENAI_KEY;
const apiKey = rawKey ? rawKey.replace(/^"|"$/g, "") : undefined;

class OpenAIClient {
  static client = new OpenAI({
    apiKey,
  });

  // método estático que retorna configuração para completions (antigo)
  static textCompletion({ prompt }) {
    return {
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }

  // método estático que já usa chat.completions (atual)
  static async chatCompletion({ prompt }) {
    const response = await OpenAIClient.client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Você é um assistente útil.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.choices[0].message.content;
  }
}

module.exports = OpenAIClient;
