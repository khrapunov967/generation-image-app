import express from "express";
import allRoutes from "./routes/index.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", allRoutes);

app.listen(PORT, (err) => {
    if (err) {
        process.exit(1);
    
    } else {
        console.log(`Server started on port ${PORT}`)
    }
});