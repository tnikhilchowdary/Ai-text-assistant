import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai"

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey:process.env.OPEN_API_KEY,
});

app.get("/", (req, res) => {
    res.send("Backend is running");
})

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}")
})