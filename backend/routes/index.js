import express from "express";
import openaiRoutes from "./openai-routes.js";
import imagesRoutes from "./images-routes.js";

const router = express.Router();

router.use("/openai", openaiRoutes);
router.use("/images", imagesRoutes);

export default router;