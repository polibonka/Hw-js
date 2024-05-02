"use strict";

//1

let friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ",";
  }
}

console.log(string);

//2
// Працюємо з колекцією карток в trello.  Метод splice() (можна використати інші методи)

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

//3

const cardToRemove1 = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove1);
if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}

const cardToRemove = "Карточка-3";
cards.splice(2, 1);
console.log(cards);

//4

const cardToInsert = "Карточка-6";
cards.splice(5, 0, cardToInsert);
console.log(cards);
