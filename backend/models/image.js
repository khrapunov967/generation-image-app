import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

export default mongoose.model("Image", ImageSchema, "images");