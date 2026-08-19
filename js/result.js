console.log("result.js loaded");

// GET USER
const user = JSON.parse(localStorage.getItem("currentUser")) || {
  username: "demoUser"
};

// GET DATA
const quizQuestions = JSON.parse(
  localStorage.getItem("quiz_" + user.username)
) || [];

const userAnswers = JSON.parse(
  localStorage.getItem("answers_" + user.username)
) || [];

console.log("Questions:", quizQuestions);
console.log("Answers:", userAnswers);

if (quizQuestions.length === 0) {
  alert("No quiz data found!");
}

// INITIALIZE
let totalQuestions = quizQuestions.length;
let correct = 0;
let wrong = 0;
let skipped = 0;

const domainStats = {};

// CALCULATE RESULTS
quizQuestions.forEach((q, index) => {
  const userAnswer = userAnswers[index];

  if (!domainStats[q.domain]) {
    domainStats[q.domain] = {
      correct: 0,
      total: 0
    };
  }

  domainStats[q.domain].total++;

  if (!userAnswer) {
    skipped++;
  } else if (q.type === "MCQ" && userAnswer === q.answer) {
    correct++;
    domainStats[q.domain].correct++;
  } else {
    wrong++;
  }
});

// SCORE
const scorePercent = totalQuestions > 0
  ? Math.round((correct / totalQuestions) * 100)
  : 0;

// PERFORMANCE TEXT
let performance = "";
if (scorePercent >= 80) {
  performance = "Excellent 🎉";
} else if (scorePercent >= 60) {
  performance = "Good 👍";
} else {
  performance = "Needs Improvement 😅";
}

// FEEDBACK
let feedback = "";
if (scorePercent >= 80) {
  feedback = "Great job! You're ready for placements 🚀";
} else if (scorePercent >= 60) {
  feedback = "Good work! Improve weak areas to score higher.";
} else {
  feedback = "Practice more. Focus on basics and try again.";
}

// UPDATE UI
document.getElementById("score").innerText =
  `${correct}/${totalQuestions}`;

document.getElementById("percentage").innerText =
  `Percentage: ${scorePercent}%`;

document.getElementById("performance").innerText =
  `Performance: ${performance}`;

document.getElementById("feedback").innerText = feedback;

document.getElementById("correct").innerText = correct;
document.getElementById("total").innerText = totalQuestions;

// STRENGTHS & WEAKNESSES
const strengths = [];
const weaknesses = [];

for (let domain in domainStats) {
  const accuracy =
    (domainStats[domain].correct / domainStats[domain].total) * 100;

  if (accuracy >= 70) {
    strengths.push(domain);
  } else {
    weaknesses.push(domain);
  }
}

document.getElementById("strengths").innerText =
  strengths.length ? strengths.join(", ") : "None";

document.getElementById("weaknesses").innerText =
  weaknesses.length ? weaknesses.join(", ") : "None";

// CHART (SAFE)
let canvas = document.getElementById("resultChart");

if (canvas) {
  let ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Correct", "Wrong", "Skipped"],
      datasets: [{
        data: [correct, wrong, skipped],
        backgroundColor: ["#16a34a", "#dc2626", "#9ca3af"]
      }]
    },
    options: {
      responsive: true
    }
  });
}

// REVIEW SECTION (SAFE)
let reviewSection = document.getElementById("reviewSection");

if (reviewSection) {
  quizQuestions.forEach((q, index) => {
    let div = document.createElement("div");

    div.innerHTML = `
      <p><b>Q${index + 1}:</b> ${q.question}</p>
      <p>Your Answer: ${userAnswers[index] || "Not Attempted"} ❌</p>
      <p>Correct Answer: ${q.answer} ✅</p>
      <hr>
    `;

    reviewSection.appendChild(div);
  });
}

// FUNCTIONS
function retakeQuiz() {
  window.location.href = "quiz.html";
}

function downloadResult() {
  window.print();
}