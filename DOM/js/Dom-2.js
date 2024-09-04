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

      const ingredientsList = document.querySelector('#ingredients');

      const listItems = ingredients.map(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        return li;
      });
  
      ingredientsList.append(...listItems);


//3

const images = [
    {
     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];

const galleryContainer = document.querySelector('#gallery');

const galleryItems = images.map(image => {
    return `<li class='galleryItem'>
                <img src='${image.url}' alt='${image.alt}' />
            </li>`;
}).join(''); 

galleryContainer.insertAdjacentHTML('beforeend', galleryItems); 

//4

let counterValue = 0;

const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue; 
};

const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue; 
};


decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
