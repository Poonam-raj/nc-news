import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://poonam-nc-news.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};
