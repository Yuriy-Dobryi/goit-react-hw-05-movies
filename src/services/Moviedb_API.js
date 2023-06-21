import axios from 'axios';

export default async function Moviedb_API(path, query) {
  const URL = `https://api.themoviedb.org/3/${path}`;
  const config = {
    params: {
      api_key: `2f1ed426eec63f4ff67bdd1fc7f22e9d`,
      language: 'en-US',
    },
  };

  if (query) {
    config.params.query = query;
  }

  const response = await axios.get(URL, config);
  return response.data;
}