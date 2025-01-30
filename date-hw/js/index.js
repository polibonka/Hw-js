// const timer = document.querySelector('#timer-1');
const fields = document.querySelectorAll('.field')
const valueSeconds = document.querySelector('[data-value="secs"]');
const valueDays = document.querySelector('[data-value="days"]');
const valueHours = document.querySelector('[data-value="hours"]');
const valueMinutes = document.querySelector('[data-value="mins"]');
const labels = document.querySelectorAll('.label')

const targetDate = new Date('Jul 17, 2025');

let timerId;
const updateTimer = () => {
    timerId = setInterval(() => {
        const now = Date.now();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(timerId);
        valueDays.textContent = "00";
        valueHours.textContent = "00";
        valueMinutes.textContent = "00";
        valueSeconds.textContent = "00";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        valueDays.textContent = String(days).padStart(2, "0");
        valueHours.textContent = String(hours).padStart(2, "0");
        valueMinutes.textContent = String(mins).padStart(2, "0");
        valueSeconds.textContent = String(secs).padStart(2, "0");
    }, 1000);
};

updateTimer();
