const slider = document.querySelector('.slider')
const sliderInput = document.querySelector('.slider__input')
const sliderImage = document.querySelector('.slider__image')

sliderInput.addEventListener('input', _.debounce(() => {
 const scale = sliderInput.value / 50;
 sliderImage.style.transform = `scale(${scale})`
}, 50))

//2

const box = document.querySelector('#box')

const boxMove = _.debounce((e) => {
    const {clientX, clientY} = e
    box.style.left = `${clientX}px`
    box.style.top = `${clientY}px`
}, 100)

document.addEventListener("mousemove", boxMove)
