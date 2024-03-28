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

if (input1 !== "" && input2 !== "") {
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

// 5 Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

const name = prompt("Введіть своє ім'я ");
const email = prompt("Введіть свій email");
const password = prompt("Введіть пароль ");

console.log(name.length);

if (
  name.length > 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length > 6
) {
  alert("Всі дані записані коректно");
}
