import { mobNavigation, navToggler } from './modules/dom-elements.js';
import { addItemsToDOM } from './modules/domManipulators.js';
import './style.css';

navToggler.addEventListener('click', (e) => {
  e.preventDefault();
  mobNavigation.style.display = 'block';
});

mobNavigation.addEventListener('click', (event) => {
  if (event.target.localName === 'ul') {
    mobNavigation.style.display = 'none';
  }
});

addItemsToDOM();

document.body.addEventListener('click', (event) => {
  if (event.target.className === 'character-item-btn') {
    console.log(event.target.dataset.pokemon);
  }
});
