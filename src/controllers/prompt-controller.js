const InputPrompt = require("../models/input-prompt");
const OpenAIClient = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    const inputModel = new InputPrompt(req.body);
    try {
      // usa o método atualizado que retorna o texto da resposta
      const text = await OpenAIClient.chatCompletion({
        prompt: inputModel.prompt,
      });
      return res.status(200).json({
        success: true,
        data: text,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.response ? error.response.data :
        "there was an inssue on the server"
      });
    }
  },
};
// colocar toda a entrada que o usuario fizer
