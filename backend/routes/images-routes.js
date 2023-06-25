import express from "express";
import { getRecentImages } from "../controllers/images-controllers.js";

const router = express.Router();

router.get("/recent", getRecentImages);

export default router;