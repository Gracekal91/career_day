let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessCount = 0;

document.getElementById("guess-button").addEventListener("click", () => {
    const userGuess = Number(document.getElementById("guess-input").value);
    const message = document.getElementById("message");
    guessCount++;
    if (userGuess === randomNumber) {
        document.getElementById("image").style.display='block'
        message.textContent = `Congratulations! You guessed the number in ${guessCount} attempts.`;
        message.style.color = "green";
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "red";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "red";
    }
});

function endGame() {
    document.getElementById("guess-input").disabled = true;
    document.getElementById("guess-button").style.display = "none";
    document.getElementById("reset-button").style.display = "inline-block";
}

document.getElementById("reset-button").addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    guessCount = 0;
    document.getElementById("guess-input").value = "";
    document.getElementById("guess-input").disabled = false;
    document.getElementById("guess-button").style.display = "inline-block";
    document.getElementById("reset-button").style.display = "none";
    document.getElementById("image").style.display='none';
    document.getElementById("message").textContent = "";
});


// variables
// if statements logic operations
//     fucntions
// DOM - selection