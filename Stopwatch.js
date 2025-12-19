let time = 0;
let interval;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    const seconds = Math.floor(time / 1000);
    const centiseconds = Math.floor((time % 1000) / 10);
    display.textContent = `${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            time += 10;
            updateDisplay();
        }, 10);
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
    }
}

function reset() {
    stop();
    time = 0;
    updateDisplay();
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
