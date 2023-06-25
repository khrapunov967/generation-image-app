import express from "express";
import allRoutes from "./routes/index.js";
import cors from "cors";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", allRoutes);

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");

    } catch (error) {
        process.exit(1)
    }
}

app.listen(PORT, (err) => {
    if (err) {
        process.exit(1);
    
    } else {
        console.log(`Server started on port ${PORT}`);
        connectToMongoDB();
    }
});