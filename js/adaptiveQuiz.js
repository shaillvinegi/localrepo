// ✅ Get interests
let interests = JSON.parse(localStorage.getItem("selectedInterests"));

let currentQuestion;
let currentDifficulty = "Easy";

let correctStreak = 0;
let wrongStreak = 0;
let currentIndex = 0;
let totalQuestions = 5;

let userAnswers = [];

// 🎯 Map interests → domains
function mapInterestsToDomains() {
  let domains = [];

  if (interests.includes("WEB")) {
    domains.push("HTML", "CSS", "JAVASCRIPT");
  }
  if (interests.includes("DATA")) {
    domains.push("DBMS");
  }
  if (interests.includes("AI")) {
    domains.push("PYTHON");
  }
  if (interests.includes("CYBER")) {
    domains.push("NETWORKS");
  }

  return domains;
}

let selectedDomains = mapInterestsToDomains();

// 🎯 Get next question
function getNextQuestion() {
  let filtered = window.questionBank.filter(
    q => selectedDomains.includes(q.domain) &&
         q.difficulty === currentDifficulty
  );

  if (filtered.length === 0) {
    filtered = window.questionBank;
  }

  return filtered[Math.floor(Math.random() * filtered.length)];
}

// 📥 Load question
function loadQuestion() {
  currentQuestion = getNextQuestion();

  document.getElementById("question").innerText =
    currentQuestion.question;

  document.getElementById("difficulty").innerText =
    currentDifficulty;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  currentQuestion.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      userAnswers[currentIndex] = opt;
    };

    optionsDiv.appendChild(btn);
  });
}

// ➡️ Next
function nextQuestion() {

  if (userAnswers[currentIndex] === undefined) {
    alert("Answer first!");
    return;
  }

  if (userAnswers[currentIndex] === currentQuestion.answer) {
    correctStreak++;
    wrongStreak = 0;
  } else {
    wrongStreak++;
    correctStreak = 0;
  }

  // 🔥 Adaptive logic
  if (correctStreak >= 2) {
    currentDifficulty = "Difficult";
  } else if (wrongStreak >= 2) {
    currentDifficulty = "Easy";
  } else {
    currentDifficulty = "Moderate";
  }

  currentIndex++;

  if (currentIndex < totalQuestions) {
    loadQuestion();
  } else {
    alert("Adaptive Quiz Completed!");
    window.location.href = "result.html";
  }
}

// start
loadQuestion();

// make global
window.nextQuestion = nextQuestion;