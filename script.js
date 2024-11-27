const textInput = document.getElementById("text-input");
const letterCount = document.getElementById("letter-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
const generateBgButton = document.getElementById("generate-bg");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  const letters = text.replace(/[^a-zA-Z]/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

  letterCount.textContent = letters;
  wordCount.textContent = words;
  sentenceCount.textContent = sentences;
});

// Random background
generateBgButton.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
});
