"use strict";

//1
// const textInput1 = document.querySelector(".text-input1");
// const textInput2 = document.querySelector(".text-input2");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   if (textInput1.value && textInput2.value) {
//     alert("Обидва поля заповнені");
//   } else {
//     alert("Обидва поля не заповнені");
//   }
// });

//1

const input1 = prompt("", "");
const input2 = prompt("", "");

if (input1 && input2) {
  alert("Обидва поля заповнені");
} else {
  alert("Обидва поля не заповнені");
}

//2

const input3 = +prompt("", "");
const input4 = +prompt("", "");
const sum = input3 + input4;

if (sum <= 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

//3

const answer = prompt("ВВедіть текст", "");

if (answer === "JavaScript") {
  alert("Текст містить JavaScript");
} else {
  alert("Текст не містить слова JavaScript");
}

//4

const input5 = +prompt("", "");
const input6 = +prompt("", "");

if (input5 > 10 && input6 < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}

// 5 Не знаю як зробити
