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