"use strict";

//1

let arrNumber = ["1", "2", "3", "4"];
console.log(arrNumber);
arrNumber[2] = "10";
console.log(arrNumber);

//2

let arrString = ["Fruit", "Veggie", "Meat"];
console.log(arrString);
arrString[3] = "Fish";
console.log(arrString);

//3
// Створити скрипт який поверне суму всіх чисел в масиві.
let arrayNumber = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arrayNumber.length; i++) {
  sum += arrayNumber[i];
}

console.log(sum);

//4

let arrayNumbers = ["1", "2", "3", "4", "5"];

for (let i = 0; i < arrayNumbers.length; i++) {
  console.log(arrayNumbers[i]);
}

//5

let arrStr = ["Childhood", "School", "Universty", "Work", "Pension"];

for (let i = 0; i < arrStr.length; i++) {
  if (arrStr[i].length > 5) {
    console.log(arrStr[i]);
  }
}

//6

let numbers = [5, 12, 8, 22, 10, 15, 3, 17, 9, 6];

let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log(maxNumber);

//7

let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] % 2 === 0) {
    console.log(arrNum[i]);
  }
}
