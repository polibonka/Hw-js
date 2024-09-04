'use strict'

const images = document.querySelectorAll('.gallery .image');
let currentIndex = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
    }
});

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

function showPreviousImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

//2

const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const amountInput = document.getElementById('amount-input');

controls.querySelector('[data-action="render"]').addEventListener('click', () => {
    const amount = parseInt(amountInput.value);
    if (amount > 0) {
        createBoxes(amount);
    }
});

controls.querySelector('[data-action="destroy"]').addEventListener('click', () => {
    destroyBoxes();
});

function createBoxes(amount) {
    destroyBoxes(); 
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomRgbColor();
        box.textContent = `${size}px x ${size}px`;
        boxesContainer.appendChild(box);
        size += 10;  
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';  
}

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}