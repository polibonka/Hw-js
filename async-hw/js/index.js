//1 
let count = 0
let intervalId

const Message = () => {
 intervalId = setInterval(() => {
count++
    console.log(`Message ${count}`)
    if(count === 5){
        clearInterval(intervalId)
        console.log("Інтервал зупинено");
        
    }
}, 1000)
   
    return 
}

Message()

//2

const boxes = document.querySelectorAll(".box, .box1");
let interId;
let counter = 0;

const boxMove = () => {
  interId = setInterval(() => {
    counter++;

    boxes.forEach((box) => {

      const randomSize = Math.random() * 50 + 50; // 
      const randomPositionX = Math.random() * 100 - 50; 
      const randomPositionY = Math.random() * 100 - 50; 

   
      box.style.width = `${randomSize}px`;
      box.style.height = `${randomSize}px`;
      box.style.transform = `translate(${randomPositionX}px, ${randomPositionY}px)`;
    });

    
    
  }, 1000);
};
boxMove();

//3

const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const clicksDisplay = document.getElementById("clicks");
const startButton = document.getElementById("startGame");

let score = 0;
let totalClicks = 0;
let intervalIdd = null;


const createTarget = () => {
  const target = document.createElement("div");
  target.classList.add("target");

 
  const randomX = Math.random() * (gameArea.clientWidth - 50);
  const randomY = Math.random() * (gameArea.clientHeight - 50);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;

 
  gameArea.appendChild(target);


  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    target.remove(); 
  });

  
  setTimeout(() => {
    if (gameArea.contains(target)) {
      target.remove();
    }
  }, 2000);
};


const startGame = () => {
  score = 0;
  totalClicks = 0;
  scoreDisplay.textContent = score;
  clicksDisplay.textContent = totalClicks;


  gameArea.addEventListener("click", () => {
    totalClicks++;
    clicksDisplay.textContent = totalClicks;
  });

  intervalId = setInterval(createTarget, 1000);

  
  setTimeout(() => {
    clearInterval(intervalId);
    alert(`Гра завершена! Ваш рахунок: ${score}`);
  }, 30000);
};


startButton.addEventListener("click", () => {
  startGame();
});

//4

const timeInput = document.querySelector("#timeInput");
const startTimerButton = document.querySelector("#startTimer");
const message = document.querySelector("#message");

startTimerButton.addEventListener("click", () => {
 
  const timeInSeconds = parseInt(timeInput.value);


  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    message.textContent = "Будь ласка, введіть коректний час у секундах.";
    return;
  }

  message.textContent = `Таймер запущено на ${timeInSeconds} секунд...`;


  setTimeout(() => {
    message.textContent = `Час вийшов! (${timeInSeconds} секунд)`;
  }, timeInSeconds * 1000);
});
