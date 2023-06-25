import Image from "../models/image.js";

export const getRecentImages = async (req, res) => {
    try {
        const images = await Image.find().limit(25);
        return res.status(200).json(images);

    } catch (error) {
        return res.status(500).json("Something went wrong!");
    }
};