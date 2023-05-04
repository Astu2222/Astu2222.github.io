const API_KEY = "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";
const MODEL_ID = "davinci";

function generateText() {
  const prompt = document.getElementById("input-text").value.trim();
  if (!prompt) {
    return;
  }
  document.getElementById("generate-btn").disabled = true;
  document.getElementById("output-text").textContent = "Generando...";
  
  const url = "https://api.openai.com/v1/engines/" + MODEL_ID + "/completions";
  const data = {
    prompt: prompt,
    max_tokens: 2048,
    n: 1,
    stop: "\n",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    body: JSON.stringify(data),
  })
  
  .then(response => response.json())
  .then(data => {
    if (data.choices && data.choices.length > 0) {
      const text = data.choices[0].text.trim();
      document.getElementById("output-text").textContent = text;
    } else {
      document.getElementById("output-text").textContent = "La respuesta de la API no es válida.";
    }
    document.getElementById("generate-btn").disabled = false;
  })
  
  .catch(error => {
    console.error(error);
    document.getElementById("output-text").textContent = "Error al generar el texto.";
    document.getElementById("generate-btn").disabled = false;
  });
}

document.getElementById("generate-btn").addEventListener("click", generateText);
