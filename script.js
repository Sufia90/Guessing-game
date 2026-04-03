// Game State
let secretNum;
let attempts;

// DOM Elements
const input = document.getElementById('guessInput');
const btn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const stats = document.getElementById('stats');
const attemptDisplay = document.getElementById('attemptCount');
const resetBtn = document.getElementById('resetBtn');

function initGame() {
    secretNum = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    
    // UI Reset
    feedback.innerText = "Good Luck!";
    feedback.className = "text-xl font-bold text-slate-700";
    input.value = "";
    input.disabled = false;
    btn.disabled = false;
    stats.classList.add('hidden');
    resetBtn.classList.add('hidden');
}

function handleGuess() {
    const guess = parseInt(input.value);

    // Validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.innerText = "Please enter a number (1-100)! ⚠️";
        feedback.className = "text-lg text-amber-500 font-semibold";
        return;
    }

    attempts++;
    stats.classList.remove('hidden');
    attemptDisplay.innerText = attempts;

    if (guess === secretNum) {
        feedback.innerText = `Correct! It was ${secretNum} 🎉`;
        feedback.className = "text-2xl font-bold text-green-500 animate-bounce";
        endGame();
    } else if (guess > secretNum) {
        feedback.innerText = "Too High! 📈";
        feedback.className = "text-xl font-bold text-red-400";
    } else {
        feedback.innerText = "Too Low! 📉";
        feedback.className = "text-xl font-bold text-blue-400";
    }
    
    input.value = "";
    input.focus();
}

function endGame() {
    input.disabled = true;
    btn.disabled = true;
    resetBtn.classList.remove('hidden');
}

// Event Listeners
btn.addEventListener('click', handleGuess);
resetBtn.addEventListener('click', initGame);

// Allow "Enter" key to submit
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleGuess();
});

// Start the game for the first time
initGame();