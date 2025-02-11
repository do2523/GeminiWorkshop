async function fetchGeminiResponse() {
    try {
        const promptHTML = document.getElementById("geminiInput").value;
        const response = await fetch("https://gemini-workshop.vercel.app/server", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: promptHTML })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.statusText}`); 
        }

        const data = await response.json();
        console.log(data.response);
        document.getElementById("geminiResponse").textContent = data.response;
    } catch (error) {
        console.error("Error fetching response:", error);
        document.getElementById("geminiResponse").textContent = `Error fetching response: ${error.message}`; // Show specific error
    }
}
