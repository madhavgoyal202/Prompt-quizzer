const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["A. Hyper Text Markup Language", "B. High Text Machine Language", "C. Hyperlinks and Text Markup Language", "D. Home Tool Markup Language"],
        answer: "a",
        hint: "HTML is the standard language for creating web pages."
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["A. var", "B. int", "C. string", "D. char"],
        answer: "a",
        hint: "It was the first variable keyword in JavaScript."
    },
    {
        question: "Which method converts a string to lowercase?",
        options: ["A. lower()", "B. toLower()", "C. toLowerCase()", "D. changeLower()"],
        answer: "c",
        hint: "It starts with 'to'."
    },
    {
        question: "Which symbol is used for single-line comments?",
        options: ["A. <!-- -->", "B. /**/", "C. //", "D. ##"],
        answer: "c",
        hint: "It uses two forward slashes."
    },
    {
        question: "Which function takes user input in the browser?",
        options: ["A. alert()", "B. confirm()", "C. input()", "D. prompt()"],
        answer: "d",
        hint: "It literally asks the user."
    }
];

function runQuiz() {
    let score = 0;
    const timeLimit = 10; // seconds per question

    for (let i = 0; i < quizQuestions.length; i++) {
        const q = quizQuestions[i];
        const startTime = Date.now();

        let userAnswer = prompt(
            `Q${i + 1}: ${q.question}\n\n${q.options.join("\n")}\n\n(You have ${timeLimit} seconds)`
        );

        const timeTaken = (Date.now() - startTime) / 1000;

        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        if (timeTaken > timeLimit) {
            alert("⏰ Time's up!\nHint: " + q.hint);
            continue;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === q.answer) {
            alert("✅ Correct!");
            score++;
        } else {
            alert(
                `❌ Wrong!\nCorrect answer: ${q.answer.toUpperCase()}\nHint: ${q.hint}`
            );
        }
    }

    const highScore = localStorage.getItem("highScore") || 0;

    if (score > highScore) {
        localStorage.setItem("highScore", score);
        alert("🏆 New High Score!");
    }

    let message = "";
    if (score === quizQuestions.length) {
        message = "🌟 Outstanding! Perfect score!";
    } else if (score >= 3) {
        message = "👏 Great job! Keep improving.";
    } else {
        message = "💡 Practice more and try again!";
    }

    alert(
        `🎯 Quiz Finished!\nYour Score: ${score}/${quizQuestions.length}\nHigh Score: ${localStorage.getItem("highScore")}\n\n${message}`
    );

    const restart = confirm("🔁 Do you want to restart the quiz?");
    if (restart) {
        runQuiz();
    }
}

// Start Quiz
runQuiz();
