import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://poonam-nc-news.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getArticles = async ({ topic, sort_by, order }) => {
  console.log('api query ', topic, sort_by, order);
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: topic,
      sort_by: sort_by,
      order: order
    }
  });
  return data.articles;
};

export const getArticleByID = async (articleID) => {
  const { data } = await newsApi.get(`/articles/${articleID}`);
  return data.article;
};

export const getCommentsByID = async (articleID) => {
  const { data } = await newsApi.get(`/articles/${articleID}/comments`);
  return data.comments;
};

export const postComment = async (articleID, newComment) => {
  const { data } = await newsApi.post(
    `/articles/${articleID}/comments`,
    newComment
  );
  return data.comment;
};

export const patchArticleVotes = async (articleID, increment) => {
  const { data } = await newsApi.patch(`/articles/${articleID}`, increment);
  return data.article;
};
