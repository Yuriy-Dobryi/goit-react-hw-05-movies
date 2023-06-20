import axios from 'axios';

const getTop = async () => {
  const URL = 'https://api.themoviedb.org/3/trending/all/day';
  const config = {
    params: {
      api_key: '2f1ed426eec63f4ff67bdd1fc7f22e9d',
      language: 'en-US',
    },
  };

  const response = await axios.get(URL, config);
  return response.data;
};

export default getTop;
