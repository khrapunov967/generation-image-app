import OpenAI from "../services/openai.js";
import Image from "../models/image.js";

export const generateImage = async (req, res) => {
    const { prompt } = req.body;

    try {
        const url = await OpenAI.generateImage(prompt);

        const newImage = new Image({
            prompt,
            url
        });

        await newImage.save();
        
        return res.status(201).json(url);

    } catch (error) {
        return res.status(500).json("Something went wrong!");
    }
};