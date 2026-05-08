function getRandomQuestion() {
  const questions = window.QUESTIONS || [];

  if (questions.length === 0) {
    console.log("❌ مفيش أسئلة");
    return;
  }

  const index = Math.floor(Math.random() * questions.length);
  const question = questions[index];

  console.log("🎯 السؤال:", question);
}

getRandomQuestion();
