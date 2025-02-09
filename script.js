// Use the Gemini API
// Gemini - LLM - Like CHATGPT but Google's version
// API -  Set of rules that allows different software programs to communicate and exchange data with each other.


// importing the necessary libararies
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Create a new instance of the GoogleGenerativeAI class
const genAI = new GoogleGenerativeAI(process.env.APIKEY);

// passing in the model 
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


// question to ask the model
const prompt = "tell me a short story";


// async function to generate the response
async function generateResponse() {
    try {
        let result = await model.generateContent(prompt);
        console.log(result.response.candidates[0].content.parts[0].text);
    } catch (error) {
        console.error("Error:", error);
    }
}

generateResponse();

