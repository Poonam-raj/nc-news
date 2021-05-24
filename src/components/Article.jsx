import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticleByID } from '../utils/api';
import Comments from './Comments';

const Article = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleByID(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);

  /*
article_id: 34
author: "grumpy19"
body: "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all."
comment_count: "11"
created_at: "2020-11-22T11:13:00.000Z"
title: "The Notorious MSG’s Unlikely Formula For Success"
topic: "cooking"
votes: 0

  */

  return (
    <main>
      <h2>{article.title}</h2>
      <div className='Article__topics'>
        <p>{article.topic}</p>
      </div>
      <div className='Article__details'>
        <p>{article.author}</p>
        <p>{article.created_at}</p>
      </div>
      <div className='Article__stats'>
        <p>{article.votes} votes</p>
        <p>{article.comment_count} comments</p>
      </div>
      {/* need a votes button here */}
      <p className='Article__body'>{article.body}</p>
      <hr />
      <h2>Comments ({article.comment_count})</h2>
      <Comments article_id={article_id} />
    </main>
  );
};

export default Article;
