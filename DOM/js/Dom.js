'use strict'

//1

const button = document.querySelector('#btn')
button.textContent = 'Click'

const input = document.querySelector('#input') 


//2

const image = document.querySelector('.img1')

image.src = 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';



//3

const img = document.querySelector('image')
image.alt = 'sunset and montains'

const link = document.querySelector('a')

link.href = 'https://www.pexels.com/search/photo%20editing/'

//4 
const list = document.querySelector('.list')
const linkFirst = list.querySelector('li:first-child p')
linkFirst.textContent = 'New Text 1'

