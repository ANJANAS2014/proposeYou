// Define quiz questions and options
const questions = [
    {
        question: "Question 1?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 1 // Index of the correct option (starting from 0)
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li onclick="checkAnswer(${index})">${option}</li>
            `).join("")}
        </ul>
    `;
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        // Correct answer
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(); // Display next question
        } else {
            // Quiz completed, redirect to another page or show result
            window.location.href = "result.html";
        }
    } else {
        // Incorrect answer, handle accordingly
        // You can provide feedback to the user or display correct answer
    }
}

// Display first question when the page loads
displayQuestion();
