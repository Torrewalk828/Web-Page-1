function gradeQuiz() {
  const form = document.forms["quizForm"];
  let score = 0;
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (form.q1.value === "B") score++;
  if (form.q2.value === "C") score++;
  if (form.q3.value === "C") score++;
  if (form.q4.value.trim().toLowerCase() === "internet explorer") score++;

  const correctQ5 = ["Chrome", "Firefox", "Edge"];
  const selectedQ5 = [...form.q5].filter(cb => cb.checked).map(cb => cb.value);
  const isCorrectQ5 = correctQ5.every(ans => selectedQ5.includes(ans)) && selectedQ5.length === 3;
  if (isCorrectQ5) score++;

  results.innerHTML = `
    <h2>Quiz Results</h2>
    <p>Total Score: ${score}/5</p>
    <p>${score >= 3 ? "✅ Pass" : "❌ Fail"}</p>
  `;
}
