alert("quiz.js is running");
console.log("quiz.js loaded");

// ================= USER =================
let user = JSON.parse(localStorage.getItem("currentUser"));


if (!user) {
  user = {
    username: "demoUser",
    // ✅ FIXED: added more domains to ensure enough questions
    domains: ["DSA", "DBMS", "HTML", "JAVASCRIPT", "OOPS_JAVA"]
  };
}

// ================= QUESTION BANK CHECK =================
if (!window.questionbank || !Array.isArray(window.questionbank)) {
  alert("Question Bank not loaded!");
  throw new Error("questionBank is missing");
}

// ================= HELPERS =================
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function filterByDomain(questions, domains) {
  return questions.filter(q => domains.includes(q.domain));
}

// ================= QUIZ GENERATION =================
function generateQuiz(questionbank, domains) {
  let filtered = filterByDomain(questionbank, domains);

  console.log("Filtered Questions:", filtered.length);

  if (filtered.length === 0) {
    alert("No questions available for selected domains!");
    return [];
  }

  let easy = shuffleArray(filtered.filter(q => q.difficulty === "Easy")).slice(0, 2);
  let moderate = shuffleArray(filtered.filter(q => q.difficulty === "Moderate")).slice(0, 2);
  let difficult = shuffleArray(filtered.filter(q => q.difficulty === "Difficult")).slice(0, 2);

  let finalQuiz = [...easy, ...moderate, ...difficult];

  // ✅ fallback if not enough questions
  if (finalQuiz.length < 5) {
    finalQuiz = shuffleArray(filtered).slice(0, 5);
  }

  return shuffleArray(finalQuiz);
}

// ================= INIT =================
const quizQuestions = generateQuiz(window.questionbank, user.domains);

console.log("Quiz questions generated:", quizQuestions.length);
console.log(quizQuestions);

localStorage.setItem("quiz_" + user.username, JSON.stringify(quizQuestions));

let currentIndex = 0;
let userAnswers = [];

// ================= LOAD QUESTION =================
function loadQuestion() {

  let progress = ((currentIndex) / quizQuestions.length) * 100;
document.getElementById("progressBar").style.width = progress + "%";
  const q = quizQuestions[currentIndex];
  if (!q) return;

  document.getElementById("question").innerText =
    `Q${currentIndex + 1}. ${q.question}`;

  document.getElementById("difficulty").innerText = q.difficulty;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  if (q.type === "MCQ") showMCQ(q);
  else if (q.type === "Objective") showObjective();
  else if (q.type === "Subjective") showSubjective();
  else if (q.type === "CODING") showCodingQuestion();
}

// ================= QUESTION TYPES =================
function showMCQ(q) {
  const optionsDiv = document.getElementById("options");

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "option-btn";

    btn.onclick = () => {
      saveAnswer(opt);

      // highlight selected
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };

    optionsDiv.appendChild(btn);
  });
}

function showObjective() {
  const input = document.createElement("input");
  input.placeholder = "Type your answer";
  input.className = "text-input";

  input.oninput = e => saveAnswer(e.target.value);

  document.getElementById("options").appendChild(input);
}

function showSubjective() {
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Write your answer here";
  textarea.className = "text-area";

  textarea.oninput = e => saveAnswer(e.target.value);

  document.getElementById("options").appendChild(textarea);
}

function showCodingQuestion() {
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Write your code here";
  textarea.className = "code-area";
  textarea.style.height = "220px";

  textarea.oninput = e => saveAnswer(e.target.value);

  document.getElementById("options").appendChild(textarea);
}

// ================= SAVE ANSWER =================
function saveAnswer(answer) {
  userAnswers[currentIndex] = answer;
}

// ================= NEXT QUESTION =================
function nextQuestion() {
  console.log("Next clicked", currentIndex);
  if (userAnswers[currentIndex] == undefined) {
    alert("Please answer before proceeding!");
    return;
  }

  currentIndex++;

  if (currentIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    localStorage.setItem(
      "answers_" + user.username,
      JSON.stringify(userAnswers)
    );

    alert("Quiz completed!");
    window.location.href = "result.html";
  }
}

// ================= BUTTON EVENT =================
window.onload = function () {
  

  if (quizQuestions.length > 0) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText =
      "No questions found. Check question bank.";
  }
};

// ================= START QUIZ =================
if (quizQuestions.length > 0) {
  loadQuestion();
} else {
  document.getElementById("question").innerText =
    "No questions found. Check question bank.";
}

let timeLeft = 60;

setInterval(() => {
  timeLeft--;
  document.getElementById("timer").innerText = timeLeft;

  if (timeLeft <= 0) {
    alert("Time's up!");
    window.location.href = "result.html";
  }
}, 1000);
console.log("quiz.js loaded");
window.nextQuestion = nextQuestion;
