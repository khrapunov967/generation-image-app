import axios from "axios";
import * as types from "../types/functions";

export class OpenAI {

    // returns url of generated image
    static generateImage: types.generateImageFunction = async (prompt) => {
        const response = await axios.post("https://generation-images-api.onrender.com/api/openai/generate-image", {
            prompt
        });

        return response.data;
    };
};