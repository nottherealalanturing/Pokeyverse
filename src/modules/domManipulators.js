import { charactersGrid } from './dom-elements';
import { getItems } from './pokeData';

export const addItemsToDOM = async () => {
  const pocketMonsters = await getItems();
  charactersGrid.innerHTML = '';

  pocketMonsters.forEach(async (pokemon) => {
    const pocketMonster = await pokemon;
    const item = `<article class="character-item">
        <div class="character-likes-details">
          <a href="#" class="character-item-likes"
            ><span class="likes-count">9</span
            ><img src="placeholder" alt="likes" class="like-icon"
          /></a>
        </div>
        <img src="${pocketMonster.data.sprites.front_default}" alt="${pocketMonster.data.name}" class="character-item-img" />
        <div class="character-item-container">
          <p class="character-item-name">${pocketMonster.data.name}</p>
          <button type="button" role="button" class="character-item-btn">Comments</button>
          <button type="button" role="button" class="character-item-btn">Reservations</button>
        </div>
      </article>`;
    charactersGrid.innerHTML += item;
  });
};

export const p = 3;
