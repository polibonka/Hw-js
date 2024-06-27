"use strict";

//1

const fn = () => {
  console.log("Hello World!");
};

//2

const text = prompt("Вгадайте число від 1 до 100");

const randomNumber = Math.random();
if (text === randomNumber) {
  alert("Правильно");
} else {
  alert("Неправильно, Спробуйте ще раз.");
}

//3

//4

let arr = [1, 2, 3, 4, 5];
const squareArray = (array, callback) => {
  let newArr[];
  for (let num of array) {
    newArr.push(callback(num))
  }
  return newArr
}
const squereCallback

//5

// Розрахунок дисконтної ціни. Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * (discount / 100));
  callback(discountedPrice);
};

const showPrice = (discountedPrice) => {
  console.log(`Дисконтна ціна: ${discountedPrice} грн`);
};


calculateDiscountedPrice(1000, 15, showPrice);




