"use strict";

//1

let result = 5 + 5 + "5";
console.log(typeof result);

//2

let email = "polibonka@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

//3
const name1 = "My";
const name2 = "Name";
const name3 = "is";
const fullName = name1 + name2 + name3;
console.log(fullName.padEnd(14, "Viktor"));

//4
const userName = "Олександро";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
