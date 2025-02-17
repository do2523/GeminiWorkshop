const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();


const app = express();

app.use(cors()); // Allows the frontend to call this API
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.APIKEY);

app.get("/server", async (req, res) => {
    console.log("hi world")
    try {
        res.status(200);
        // res.json({response});
        // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // const prompt = req.body.prompt;
        // console.log(prompt)

        // const result = await model.generateContent(prompt);
        // const response = result.response.candidates[0].content.parts[0].text;
        
        // res.json({ response });
    } catch (error) {
        res.status(500).json({ error: "Error generating response" });
    }
});

module.exports = app;
app.listen(80, () => {
    console.log("Server running on port 3000");
});
