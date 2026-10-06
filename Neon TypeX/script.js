// ================================
// TYPEX - NEON TYPING ARENA
// ================================

// Game elements
const textDisplay = document.getElementById("textDisplay");
const typingInput = document.getElementById("typingInput");

const timerDisplay = document.getElementById("timer");

const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const errorsDisplay = document.getElementById("errors");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const bestScoreDisplay = document.getElementById("bestScore");


// ================================
// GAME DATA
// ================================

const texts = [
    "The quick brown fox jumps over the lazy dog and runs away.",

    "Technology makes our lives easier and helps us solve problems faster.",

    "Learning to code requires patience practice and consistent effort.",

    "Success comes from small improvements repeated every single day.",

    "Artificial intelligence is changing the way people work and communicate."
];

let currentText = "";

let timeLeft = 30;

let timer = null;

let gameStarted = false;

let totalTyped = 0;

let errors = 0;


// ================================
// LOAD BEST SCORE
// ================================

let bestScore = localStorage.getItem("typexBestScore") || 0;

bestScoreDisplay.textContent = bestScore;


// ================================
// SELECT RANDOM TEXT
// ================================

function selectText() {

    const randomIndex =
        Math.floor(Math.random() * texts.length);

    currentText = texts[randomIndex];

    textDisplay.textContent = currentText;
}


// ================================
// START GAME
// ================================

startBtn.addEventListener("click", startGame);


function startGame() {

    if (gameStarted) {
        return;
    }

    gameStarted = true;

    timeLeft = 30;

    totalTyped = 0;

    errors = 0;

    wpmDisplay.textContent = "0";

    accuracyDisplay.textContent = "100%";

    errorsDisplay.textContent = "0";

    timerDisplay.textContent = "00 : 30";

    selectText();

    typingInput.disabled = false;

    typingInput.value = "";

    typingInput.focus();

    startBtn.textContent = "⚡ TYPING...";

    startBtn.disabled = true;

    startTimer();
}


// ================================
// TIMER
// ================================

function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            finishGame();

        }

    }, 1000);
}


// ================================
// UPDATE TIMER
// ================================

function updateTimer() {

    let seconds =
        timeLeft.toString().padStart(2, "0");

    timerDisplay.textContent =
        `00 : ${seconds}`;
}


// ================================
// TYPING EVENT
// ================================

typingInput.addEventListener("input", checkTyping);


function checkTyping() {

    if (!gameStarted) {
        return;
    }

    const typedText = typingInput.value;

    totalTyped = typedText.length;

    let currentErrors = 0;

    // Check every typed character
    for (
        let i = 0;
        i < typedText.length;
        i++
    ) {

        if (typedText[i] !== currentText[i]) {

            currentErrors++;

        }
    }

    errors = currentErrors;

    errorsDisplay.textContent = errors;

    updateAccuracy();

    updateWPM();

    // If user completes the sentence
    if (typedText === currentText) {

        finishGame();

    }
}


// ================================
// ACCURACY
// ================================

function updateAccuracy() {

    if (totalTyped === 0) {

        accuracyDisplay.textContent = "100%";

        return;
    }

    const correctCharacters =
        totalTyped - errors;

    let accuracy =
        (correctCharacters / totalTyped) * 100;

    accuracy = Math.max(0, accuracy);

    accuracyDisplay.textContent =
        Math.round(accuracy) + "%";
}


// ================================
// WPM CALCULATION
// ================================

function updateWPM() {

    const elapsedTime = 30 - timeLeft;

    if (elapsedTime <= 0) {

        wpmDisplay.textContent = "0";

        return;
    }

    const minutes =
        elapsedTime / 60;

    const words =
        (totalTyped / 5);

    const wpm =
        Math.round(words / minutes);

    wpmDisplay.textContent =
        Math.max(0, wpm);
}


// ================================
// FINISH GAME
// ================================

function finishGame() {

    if (!gameStarted) {
        return;
    }

    gameStarted = false;

    clearInterval(timer);

    typingInput.disabled = true;

    startBtn.disabled = false;

    startBtn.textContent = "▶ START GAME";

    updateWPM();

    updateAccuracy();

    const finalWPM =
        parseInt(wpmDisplay.textContent);

    updateBestScore(finalWPM);

    showResult();
}


// ================================
// BEST SCORE
// ================================

function updateBestScore(score) {

    if (score > Number(bestScore)) {

        bestScore = score;

        localStorage.setItem(
            "typexBestScore",
            bestScore
        );

        bestScoreDisplay.textContent =
            bestScore;

        bestScoreDisplay.style.animation =
            "scorePop 0.5s ease";

        setTimeout(() => {

            bestScoreDisplay.style.animation = "";

        }, 500);
    }
}


// ================================
// RESULT MESSAGE
// ================================

function showResult() {

    const finalWPM =
        parseInt(wpmDisplay.textContent);

    if (finalWPM >= 60) {

        footerMessage(
            "🔥 Amazing! You're a typing machine!"
        );

    } else if (finalWPM >= 40) {

        footerMessage(
            "⚡ Great job! Keep improving!"
        );

    } else if (finalWPM > 0) {

        footerMessage(
            "💪 Good start! Try to beat your score!"
        );

    } else {

        footerMessage(
            "⌨️ Give it another try!"
        );
    }
}


// ================================
// FOOTER MESSAGE
// ================================

function footerMessage(message) {

    const footer =
        document.querySelector("footer");

    footer.textContent = message;

    footer.style.transform = "scale(1.05)";

    footer.style.transition = "0.3s";

    setTimeout(() => {

        footer.style.transform = "scale(1)";

    }, 300);
}


// ================================
// TRY AGAIN
// ================================

restartBtn.addEventListener(
    "click",
    restartGame
);


function restartGame() {

    clearInterval(timer);

    gameStarted = false;

    timeLeft = 30;

    totalTyped = 0;

    errors = 0;

    typingInput.value = "";

    typingInput.disabled = true;

    timerDisplay.textContent =
        "00 : 30";

    wpmDisplay.textContent =
        "0";

    accuracyDisplay.textContent =
        "100%";

    errorsDisplay.textContent =
        "0";

    startBtn.disabled = false;

    startBtn.textContent =
        "▶ START GAME";

    footerMessage(
        "⚡ Keep typing. Beat your best!"
    );

    selectText();
}


// ================================
// INITIAL SETUP
// ================================

selectText();

typingInput.disabled = true;