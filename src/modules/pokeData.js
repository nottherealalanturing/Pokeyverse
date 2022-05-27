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
