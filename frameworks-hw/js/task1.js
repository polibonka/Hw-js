import { info, success, error } from '@pnotify/core';

import '@pnotify/core/dist/BrightTheme.css';

import '@pnotify/core/dist/PNotify.css';


const arrayKeys = ["a", "b", "c", "d", "e", "f",]

let currentKeyIndex 

const keyElement = document.querySelector("#key")

const generateKey = () => {
    currentKeyIndex = Math.floor(Math.random() * arrayKeys.length)
    keyElement.textContent = arrayKeys[currentKeyIndex]
}
    window.addEventListener("keydown", (e) => {
        e.preventDefault()
        const pressedKey = e.key.toLowerCase()
        console.log(pressedKey);
        
        if (pressedKey === arrayKeys[currentKeyIndex]) {
   success({text: "True"})
   generateKey()
        }else{
            error({text: "False"})
        }
})

const gameBtn = document.querySelector(".start");

gameBtn.addEventListener("click", () => {
   info({text: "The game is starting"})
   generateKey()
})