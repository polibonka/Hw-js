'use strict'
//1, 2
const btnModalOpen = document.querySelector('.button[data-action="open-modal"]')
const btnModalClose = document.querySelector('.button[data-action="close-modal"]')
const backdrop = document.querySelector('.js-backdrop')
console.log(btnModalOpen);
console.log(btnModalClose);
console.log(backdrop);
const toggleModal = () =>{
    document.body.classList.toggle('show-modal')

}

btnModalOpen.addEventListener('click', toggleModal)

btnModalClose.addEventListener('click',toggleModal )

backdrop.addEventListener('click', (e)=> {
    if(e.target === backdrop){
        toggleModal()
    }
})

//3

const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedColor = event.target.value;
        document.body.style.backgroundColor = selectedColor;
    });
});

//4

const inputField = document.getElementById('name-input');
const outputField = document.getElementById('name-output');

inputField.addEventListener('input', function() {
    outputField.textContent = inputField.value.trim() === '' ? 'незнайомець' : inputField.value;
});


inputField.addEventListener('blur', function() {
    const expectedLength = parseInt(inputField.getAttribute('data-length'));
    const actualLength = inputField.value.length;

    if (actualLength === expectedLength) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    } else {
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');
    }
});

//5

const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
    const fontSize = fontSizeControl.value + 'px';
    text.style.fontSize = fontSize;
});


