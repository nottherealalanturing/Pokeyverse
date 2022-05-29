import {
  body,
  commentForm,
  commentList,
  commentModal,
  insightComment,
  mobNavigation,
  nameComment,
  navToggler,
} from './modules/dom-elements.js';
import { addItemsToDOM, showComment } from './modules/domManipulators.js';
import { getComments, postComment } from './modules/pokeData.js';
import { getCommentList } from './modules/utility.js';
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
  if (event.target.classList[1] === 'comment-btn') {
    showComment(event.target.dataset.pokemon);
    body.style.overflow = 'hidden';
    commentModal.style.display = 'block';
  }

  if (event.target.classList[1] === 'reserve-btn') {
    body.style.overflow = 'hidden';
  }

  if (event.target.className === 'comment-modal') {
    commentModal.style.display = 'none';
    body.style.overflow = 'auto';
  }
});

commentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const pokemonName = e.target.dataset.pokemon;
  postComment({
    id: pokemonName,
    username: nameComment.value,
    comment: insightComment.value,
  });

  nameComment.value = '';
  insightComment.value = '';
  const pocketMonsterComment = await getComments(pokemonName);
  commentList.innerHTML = getCommentList(pocketMonsterComment.data);
});
