import { Configuration, OpenAIApi } from "openai";
import "dotenv/config";

// create OpenAI API configuration with api key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default class OpenAI {
    // generate image and return url on this image
    static generateImage = async (prompt) => {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024"
        });

        const url = response.data.data[0].url;

        return url;
    };
};