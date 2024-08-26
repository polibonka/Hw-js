'use strict'

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