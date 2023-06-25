import { generateImage } from "../controllers/openai-controllers.js";
import express from "express";

const router = express.Router();

router.post("/generate-image", generateImage);

export default router;