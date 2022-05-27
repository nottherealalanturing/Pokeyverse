import {
  charImage,
  charItemLikeIcon,
  logoDOM,
  mobNavigation,
  navBtnImg,
  navToggler,
} from './modules/dom-elements.js';
import { hamburger, heart, pikachu, pokemonLogo } from './modules/images.js';
import { getList } from './modules/pokeData.js';
import './style.css';

logoDOM.src = pokemonLogo;
navBtnImg.src = hamburger;

navToggler.addEventListener('click', (e) => {
  e.preventDefault();
  mobNavigation.style.display = 'block';
});

mobNavigation.addEventListener('click', (event) => {
  if (event.target.localName === 'ul') {
    mobNavigation.style.display = 'none';
  }
});

charImage.src = pikachu;
charItemLikeIcon.src = heart;

getList();
