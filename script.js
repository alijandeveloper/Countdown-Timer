let countdown;
let timeLeft = 0;
let isPaused = false;

const timeInput = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("display");
const progressBar = document.getElementById("progress");
const themeToggle = document.getElementById("theme-toggle");
const alarmSound = document.getElementById("alarm");

// Start Timer
startBtn.addEventListener("click", function() {
    if (timeInput.value > 0) {
        timeLeft = parseInt(timeInput.value);
        startCountdown();
    }
});

// Countdown Function
function startCountdown() {
    clearInterval(countdown);
    isPaused = false;
    updateDisplay(timeLeft);

    let initialTime = timeLeft;
    progressBar.style.width = "100%";

    countdown = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            updateDisplay(timeLeft);
            progressBar.style.width = (timeLeft / initialTime) * 100 + "%";

            if (timeLeft <= 0) {
                clearInterval(countdown);
                display.innerHTML = "⏰ Time's Up!";
                progressBar.style.width = "0%";
                alarmSound.play();
            }
        }
    }, 1000);
}
