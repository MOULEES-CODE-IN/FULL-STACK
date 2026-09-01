let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let previousGuesses = [];


// Check Guess

function checkGuess() {

    let guess = Number(
        document.getElementById("guess").value
    );

    let message = document.getElementById("message");

    let guessList = document.getElementById("guessList");


    // Empty input

    if (guess === 0) {

        message.textContent =
            "Please enter a number!";

        return;
    }


    // Invalid number

    if (guess < 1 || guess > 100) {

        message.textContent =
            "Enter a number between 1 and 100!";

        return;
    }


    // Add guess to array

    previousGuesses.push(guess);

    attempts++;


    // Update attempts

    document.getElementById("attempts").textContent =
        attempts;


    // Show previous guesses

    guessList.innerHTML = "";

    previousGuesses.forEach(function(number) {

        let span = document.createElement("span");

        span.textContent = number;

        span.classList.add("guess-number");

        guessList.appendChild(span);

    });


    // Check number

    if (guess === randomNumber) {

        message.textContent =
            "🎉 Correct! You guessed the number!";

    }

    else if (guess < randomNumber) {

        message.textContent =
            "📈 Too Low! Try a bigger number.";

    }

    else {

        message.textContent =
            "📉 Too High! Try a smaller number.";

    }


    // Clear input

    document.getElementById("guess").value = "";

}


// Reset Game

function resetGame() {

    randomNumber =
        Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    previousGuesses = [];


    document.getElementById("attempts").textContent = "0";

    document.getElementById("message").textContent =
        "Start the game!";

    document.getElementById("guess").value = "";

    document.getElementById("guessList").innerHTML =
        "No guesses yet";
}