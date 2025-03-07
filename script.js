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

// Pause Timer
pauseBtn.addEventListener("click", function() {
    isPaused = true;
});

// Resume Timer
resumeBtn.addEventListener("click", function() {
    isPaused = false;
});

// Reset Timer
resetBtn.addEventListener("click", function() {
    clearInterval(countdown);
    updateDisplay(0);
    progressBar.style.width = "0%";
    timeInput.value = "";
});

// Update Display
function updateDisplay(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    display.innerHTML = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// Dark Mode Toggle
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});