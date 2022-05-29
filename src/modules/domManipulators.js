import axios from 'axios';
import {
  charactersGrid,
  commentForm,
  commentList,
  commentModalAttributes,
  commentModalImage,
  commentModalTitle,
} from './dom-elements.js';
import { getComments, getItem, getItems } from './pokeData.js';
import { getAttributes, getCommentList } from './utility.js';

export const addItemsToDOM = async () => {
  const pocketMonsters = await getItems();
  charactersGrid.innerHTML = '';

  pocketMonsters.forEach(async (pokemon) => {
    const pocketMonster = await pokemon;
    const item = `<article class="character-item">
    <div class="character-likes-details">
    <a href="#" class="character-item-likes"
      ><span class="likes-count">9</span
      ><svg style="fill: red;width: 15px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
    </a>
    </div>
        <img src="${pocketMonster.data.sprites.other['official-artwork'].front_default}" alt="${pocketMonster.data.name}" class="character-item-img" />
        <div class="character-item-container">
          <h1 class="character-item-name">${pocketMonster.data.name}</h1>
          <button type="button" data-pokemon="${pocketMonster.data.name}" role="button" class="character-item-btn comment-btn">Comments</button>
          <button type="button" role="button" data-pokemon="${pocketMonster.data.name}" class="character-item-btn reserve-btn">Reservations</button>
        </div>
      </article>`;
    charactersGrid.innerHTML += item;
  });
};

export const showComment = async (pokemonName) => {
  const [pocketMonsterComment, pocketMonsterData] = await axios.all([
    getComments(pokemonName),
    getItem(pokemonName),
  ]);

  commentModalTitle.textContent = pokemonName;
  commentModalImage.src = pocketMonsterData.data.sprites.other['official-artwork'].front_default;
  commentModalImage.alt = pokemonName;
  commentModalAttributes.innerHTML = getAttributes({
    ability: pocketMonsterData.data.abilities[0].ability.name,
    itemHeld: pocketMonsterData.data.held_items[0].item.name,
    move: pocketMonsterData.data.moves[0].move.name,
    weight: pocketMonsterData.data.weight,
  });
  commentList.innerHTML = getCommentList(pocketMonsterComment.data);
  commentForm.dataset.pokemon = pokemonName;
};
