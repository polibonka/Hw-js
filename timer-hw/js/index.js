const timeDisplay = document.getElementById("timeDisplay");
const startButton = document.getElementById("startBtn");
const resetBtnTimer = document.getElementById("resetBtn");
const message = document.getElementById("message");

let timeRemaining = 3600;
let intervalId = null
let halfTimeMessageShown = false;
const updateDisplay = () => {
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  timeDisplay.textContent = `
      ${String(hours).padStart(2, "0")}:
      ${String(minutes).padStart(2, "0")}:
      ${String(seconds).padStart(2, "0")}
    `;
};

const startTimer = () => {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateDisplay();
      if (timeRemaining === 1800 && !halfTimeMessageShown) {
        alert("Залишилось менше половини часу!");
        halfTimeMessageShown = true;
      }
    } else {
      clearInterval(intervalId);
      intervalId = null;
      message.textContent = "Час вийшов";
    }
  }, 1000);
};

const resetTimer = () => {
    console.log("Resetting timer");
  clearInterval(intervalId);
  intervalId = null;
  timeRemaining = 3600;
  halfTimeMessageShown = false;
  updateDisplay();
};



updateDisplay();

startButton.addEventListener("click", startTimer);
resetBtnTimer.addEventListener("click", resetTimer);


//2

const timeDisplay2 = document.getElementById("timeDisplay2");
const startBtn = document.getElementById("startButton");
const resetBtn= document.getElementById("resetButton");
const message2 = document.getElementById("message2");


let timeRemaining2 = 30000;

let intervalId2 = null;

let animationShow = false;

const updateDisplay2 = () => {
    if (timeDisplay2) {
        const milliseconds = timeRemaining2 % 1000;
        const seconds = Math.floor(timeRemaining2 / 1000);

        timeDisplay2.textContent = `
        ${String(seconds).padStart(2, "0")}:
        ${String(milliseconds).padStart(3, "0")}
      `;
    }   
}
const startTimer2 = () => {
    if (intervalId2 !== null) return;
    intervalId2 = setInterval(() => {
      if (timeRemaining2 > 0) {
        timeRemaining2--;
        updateDisplay2();
  
        if (timeRemaining2 === 10000 && !animationShow) {
          message2.textContent = "Таймер майже закінчується!";
          animationShow = true;
     
          document.body.style.backgroundColor = "red";
        }
  
        if (timeRemaining2 <= 0) {
          clearInterval(intervalId2);
          intervalId2 = null;
          message2.textContent = "Час вийшов";
          startBtn.disabled = false;
          document.body.style.backgroundColor = "";  // Відновлюємо фон
        }
      }
    }, 1);  
  };

  const resetTimer2 = () => {
    clearInterval(intervalId2);
    intervalId2 = null;
    timeRemaining2 = 30000;
    animationShow = false;
    message2.textContent = "";
    document.body.style.backgroundColor = "";  
    updateDisplay2();
  };
  
  updateDisplay2();
  
  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;  
    startTimer2();
  });
  resetBtn.addEventListener("click", resetTimer2);


