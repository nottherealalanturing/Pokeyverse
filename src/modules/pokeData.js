/* eslint-disable */
const axios = require('axios').default;
/* eslint-enable */

export const getList = async (limit = 40) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=${limit}`);
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export const getItem = async (pokemon) => {
  try {
    const pocketMonster = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return pocketMonster;
  } catch (err) {
    console.error(err);
  }
};

export const getItems = async () => {
  try {
    const data = await getList();
    const pocketMonsters = data.map(async (element) => {
      const pocketMonster = await getItem(element.name);
      return pocketMonster;
    });

    return pocketMonsters;
  } catch (err) {
    console.error('err');
  }
};

export const getLikes = async () => {
  try {
    const response = await axios.get(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p3y9EDZY3XlxA4NW5ZcE/likes/'
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const postLike = async (item) => {
  try {
    await axios.post(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p3y9EDZY3XlxA4NW5ZcE/likes/',
      {
        item_id: `${item}`,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

export const getComments = async (pokemon) => {
  try {
    const response = await axios.get(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p3y9EDZY3XlxA4NW5ZcE/comments?item_id=${pokemon}`
    );
    return response;
  } catch (err) {
    return { data: [] };
  }
};

export const postComment = async (item) => {
  try {
    await axios.post(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p3y9EDZY3XlxA4NW5ZcE/comments/',
      {
        item_id: `${item.id}`,
        username: `${item.username}`,
        comment: `${item.comment}`,
      }
    );
  } catch (err) {
    console.error(err);
  }
};
