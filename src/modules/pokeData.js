const axios = require('axios').default;

export const getList = (limit = 40) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=${limit}`)
    .then((response) => response.data.results)
    .catch((err) => err);
};

export const r = 2;
