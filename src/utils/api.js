import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://poonam-nc-news.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getArticles = async (topic) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: topic
    }
  });
  return data.articles;
};

export const getArticleByID = async (articleID) => {
  const { data } = await newsApi.get(`/articles/${articleID}`);
  return data.article;
};

export const getCommentsByID = async (articleID) => {
  const { data } = await newsApi.get(`articles/${articleID}/comments`);
  return data.comments;
};
