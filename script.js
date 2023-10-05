const questions = [
{
question: "Q1 - What is the capital city of Bangladesh?",
options: ["Dhaka.", "Chittagong.", " Sylhet", "Rajshahi."],
correctAnswer: "Dhaka."
},
{
question: "Which river is the longest in Bangladesh?",
options: ["Ganges", "Brahmaputra", "Jamuna", "Padma"],
correctAnswer: "Brahmaputra"
},
{
question: "Which famous Nobel laureate was born in Bangladesh and is known for her work in microfinance?",
options: [" Kailash Satyarthi", " Nelson Mandela", "Malala Yousafzai", "Muhammad Yunus"],
correctAnswer: "Muhammad Yunus"
},
{
question: "Which popular traditional Bengali dish is made from rice, lentils, and various spices, and is often served with fish or meat?",
options: ["Biryani", " Hilsa Curry", "Khichuri", "Pitha"],
correctAnswer: "Khichuri"
},
{
question: "What is the official language of Bangladesh?",
options: ["English", "Bengali (Bangla)", "Urdu", "Hindi"],
correctAnswer: "Bengali (Bangla)"
},
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function displayQuestion() {
const question = questions[currentQuestion];
questionText.textContent = question.question;
optionsList.innerHTML = "";

for (let i = 0; i < question.options.length; i++) {
const option = question.options[i];
const listItem = document.createElement("li");
listItem.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
optionsList.appendChild(listItem);
}
}

function checkAnswer() {
const selectedOption = document.querySelector("input[name='answer']:checked");

if (!selectedOption) {
alert("Please select an answer.");
return;
}

const userAnswer = selectedOption.value;
const correctAnswer = questions[currentQuestion].correctAnswer;

if (userAnswer === correctAnswer) {
score++;
}

currentQuestion++;

if (currentQuestion < questions.length) {
displayQuestion();
} else {
showResult();
}
}

function showResult() {
questionText.textContent = "Quiz completed!";
optionsList.innerHTML = "";
nextButton.style.display = "none";
resultContainer.textContent = `Your Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", checkAnswer);

// Start the quiz
displayQuestion();
