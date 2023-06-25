import OpenAI from "../services/openai.js";

// generate image from prompt
export const generateImage = async (req, res) => {
    const { prompt } = req.body;

    try {
        const url = await OpenAI.generateImage(prompt);
        return res.status(201).json(url);

    } catch (error) {
        return res.status(500).json("Something went wrong!");
    }
};