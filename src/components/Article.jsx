import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as articlesAPI from '../utils/api';
import Comments from './Comments';

// - Display date created better

const Article = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    articlesAPI
      .getArticleByID(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })

      .catch((err) => console.log(err));

    setCount(article.votes);
  }, [article_id, article.votes]);

  const incrementCount = (increment) => {
    setCount((currCount) => {
      return currCount + increment;
    });
    articlesAPI
      .patchArticleVotes(article_id, { inc_votes: increment })
      .then((response) => {
        setArticle(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <main className='Article__container'>
      <div className='Article__margin'>
        <h2>{article.title}</h2>
        <p className='Article__topics'>Topic: {article.topic}</p>
        <div className='Article__details'>
          <p>Author: {article.author}</p>
          <p>Date: {article.created_at}</p>
        </div>
        <div className='Article__stats'>
          <p>{article.votes} votes</p>
          <p>{article.comment_count} comments</p>
        </div>
        {/* VOTE BUTTONS */}
        <button
          onClick={() => {
            incrementCount(1);
          }}
        >
          ⬆{' '}
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            incrementCount(-1);
          }}
        >
          ⬇{' '}
        </button>
        <article className='Article__body'>{article.body}</article>
        <hr />
        <h2>Comments ({article.comment_count})</h2>
        <Comments article_id={article_id} />
      </div>
    </main>
  );
};

export default Article;
