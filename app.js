document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const chancesElement = document.getElementById('chances');
    
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let chances = 3;

    guessButton.addEventListener('click', () => {
        let userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }

        chances--;
        chancesElement.textContent = `Chances left: ${chances}`;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
            guessButton.disabled = true;
            guessInput.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
        } else if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
        }

        if (chances === 0 && userGuess !== randomNumber) {
            message.textContent = `Game over! The correct number was ${randomNumber}.`;
            guessButton.disabled = true;
            guessInput.disabled = true;
        }
    });
});
