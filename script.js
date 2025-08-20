// Toggle Ingredients
const toggleBtn = document.getElementById("toggle-ingredients");
const ingredients = document.getElementById("ingredients");

toggleBtn.addEventListener("click", () => {
  ingredients.classList.toggle("hidden");
  toggleBtn.textContent = ingredients.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

// Step-by-step Cooking
const startBtn = document.getElementById("start-cooking");
const steps = document.querySelectorAll("#steps li");
const progressBar = document.getElementById("progress-bar");

let currentStep = 0;

startBtn.addEventListener("click", () => {
  if (currentStep < steps.length) {
    steps[currentStep].style.background = "#ffe8d6";
    steps[currentStep].scrollIntoView({ behavior: "smooth", block: "center" });

    let progress = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = progress + "%";

    currentStep++;
    startBtn.textContent = currentStep < steps.length ? "Next Step" : "Done";
  }
});
