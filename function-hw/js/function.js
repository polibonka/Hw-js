"use strict";

//1
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
let arr = ["Mango", "Poly", "Ajax"];
logItems(arr);

//2

const calculateEngravingPrice = (message, pricePerWord) => {
  const words = message.split(" ");
  const wordCount = words.length;
  const sum = wordCount * pricePerWord;
  return sum;
};
const message = "Введіть номер";
const pricePerWord = 10;
const sum = calculateEngravingPrice(message, pricePerWord);
console.log(sum);

//3

const findLongestWord = (string) => {
  const str = string.split(" ");
  let longestWord = "";
  for (const word of str) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
const string = "Введіть номер hjgfytfdtrzewa";
const longestWord = findLongestWord(string);
console.log(longestWord);

//4

const formatString = (string) => {
  if (string.length <= 40) {
    console.log(string);
  } else {
    console.log(string.slice(0, 40) + "...");
  }

  return string;
};
const str =
  "Введіть слова hhnfhfhfhfhfhfhfhfhfhfhhfhfhfhfhfhfvvvvvhhhhfdysdfvhdjwskdjhfvhskqjcdbfv";
console.log(formatString(str));

//5

const checkForSpam = (message) => {
  console.log(message.includes("spam"));
  console.log(message.includes("sale"));
  return message;
};
const message1 = "spam,sale";
console.log(checkForSpam(message1));
const message2 = "nothing";
console.log(checkForSpam(message2));

// 6
const numbers = [];
let input;
let total = 0;
