import { body, commentModal, mobNavigation, navToggler } from './modules/dom-elements.js';
import { addItemsToDOM, showComment } from './modules/domManipulators.js';
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
  /* console.log(event); */
  if (event.target.classList[1] === 'comment-btn') {
    /* console.log(event.target.dataset.pokemon); */
    showComment(event.target.dataset.pokemon);
    body.style.overflow = 'hidden';
    commentModal.style.display = 'block';
  }

  if (event.target.classList[1] === 'reserve-btn') {
    console.log(event.target.dataset.pokemon);
  }

  if (event.target.className === 'comment-modal') {
    commentModal.style.display = 'none';
    body.style.overflow = 'auto';
  }
});
