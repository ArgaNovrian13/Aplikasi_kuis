let article1 = document.getElementById("article-1");
let article2 = document.getElementById("article-2");
let article3 = document.getElementById("article-3");
let article4 = document.getElementById("article-4");
let article5 = document.getElementById("article-5");
let result = document.getElementById("result");
let resultBody = document.getElementById("result-body");
let totalScoreElem = document.getElementById("total-score");

let answer = {
  "soal-1": "C",
  "soal-2": "B",
  "soal-3": "A",
  "soal-4": "B",
  "soal-5": "A",
};
document.getElementById("next-1").addEventListener("click", function () {
  article1.style.display = "none";
  article2.style.display = "block";
});

document.getElementById("prev-2").addEventListener("click", function () {
  article1.style.display = "block";
  article2.style.display = "none";
});
document.getElementById("next-2").addEventListener("click", function () {
  article3.style.display = "block";
  article2.style.display = "none";
});
document.getElementById("prev-3").addEventListener("click", function () {
  article2.style.display = "block";
  article3.style.display = "none";
});
document.getElementById("next-3").addEventListener("click", function () {
  article4.style.display = "block";
  article3.style.display = "none";
});
document.getElementById("prev-4").addEventListener("click", function () {
  article4.style.display = "none";
  article3.style.display = "block";
});
document.getElementById("next-4").addEventListener("click", function () {
  article5.style.display = "block";
  article4.style.display = "none";
});
document.getElementById("prev-5").addEventListener("click", function () {
  article4.style.display = "block";
  article5.style.display = "none";
});
document.getElementById("submit").addEventListener("click", function () {
  let totalScore = 0;
  let maxScore = 100;
  let scorePerQuestion = maxScore / Object.keys(answer).length;

  Object.keys(answer).forEach((question, index) => {
    let userAnswer = document.querySelector(
      `input[name=${question}]:checked`
    ).value;
    let correctAnswer = answer[question];
    let score = userAnswer === correctAnswer ? scorePerQuestion : 0;

    totalScore += score;

    let row = document.createElement("tr");
    row.innerHTML = `
     <td>Soal ${index + 1}</td>
      <td>${userAnswer || "Tidak Dijawab"}</td>
      <td>${correctAnswer}</td>
      <td>${score}</td>
     `;
    resultBody.appendChild(row);
  });

  totalScoreElem.textContent = totalScore;

  article5.style.display = "none";
  result.style.display = "block";
});
// document.querySelectorAll("form").forEach((form) => {
//   form.addEventListener("submit", function (e) {
//     const selected = form.querySelector("input[type='radio']:checked");
//     if (!selected) {
//       e.preventDefault();
//       alert("Please select an option");
//     }
//   });
// });
