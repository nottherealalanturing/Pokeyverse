/* eslint-disable */
const axios = require('axios').default;
/* eslint-enable */

export const getList = async (limit = 40) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=${limit}`);

  return response.data.results;
};

export const getItems = async () => {
  const data = await getList();
  const pocketMonsters = data.map(async (element) => {
    const pocketMonster = await axios.get(`https://pokeapi.co/api/v2/pokemon/${element.name}`);
    return pocketMonster;
  });

  return pocketMonsters;
};

export const getComments = async () => {
  const response = await axios.get(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CisWXdJNG310YdGvPs91/likes/'
  );
  return response;
};

export const postComment = async (item) => {
  await axios.post(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CisWXdJNG310YdGvPs91/likes/',
    {
      item_id: `${item}`,
    }
  );
};
