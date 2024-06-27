'use strict'

//1
const categoriesList = document.querySelector('#categories');

const items = categoriesList.querySelectorAll('.item');

const listLength = items.length;

console.log(`У списку ${listLength} категорії`);

// Находим все элементы с классом title внутри .item
const nameCategories = categoriesList.querySelectorAll('#categories .title');

// Выводим названия категорий в консоль
nameCategories.forEach((nameCategory, index) => {
    console.log(`Категорія ${index + 1}: ${nameCategory.textContent}`);
});

console.log(`Кількість елементів: ${listLength}`);

//2

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];

   const newElement = document.createElement('li')
