function generateRandomNumbers() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const count = parseInt(document.getElementById("count").value);
  const resultBox = document.getElementById("result");

  if (isNaN(min) || isNaN(max) || isNaN(count)) {
    resultBox.innerHTML = "❗ Please enter valid numbers.";
    return;
  }

  if (min >= max) {
    resultBox.innerHTML = "⚠️ Minimum should be less than maximum.";
    return;
  }

  if (count < 1 || count > 10) {
    resultBox.innerHTML = "🔢 Count must be between 1 and 10.";
    return;
  }

  const results = [];
  for (let i = 0; i < count; i++) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    results.push(random);
  }

  resultBox.innerHTML = "✨ Generated: " + results.join(", ");
}
