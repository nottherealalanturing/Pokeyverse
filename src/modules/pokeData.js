const axios = require('axios').default;

export const getList = () => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.error(err));
};

export const r = 2;
