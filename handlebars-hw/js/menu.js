import menuTemplate from '../templates/menu.hbs';


const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const markup = menuTemplate(menuData);

document.getElementById('menu-template').innerHTML = markup;
