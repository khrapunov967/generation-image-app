import express from "express";
import openaiRoutes from "./openai-routes.js";

const router = express.Router();

router.use("/openai", openaiRoutes);

export default router;