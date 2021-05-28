import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as articlesAPI from '../utils/api';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import { findDate } from '../utils/util';

/* TODO

- max one vote in either direction per page load
- error handle when topic is bad - does it need to go straight to all topics or give an error page(?)
- errro handle when incorrect article ID is put in - like a lil P tag with an 'oops' statement - resuable?
- like an error component which served when an error is caught (using state)
- extract vote into its own component!

*/

const Article = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);

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
        <div className='Article__title-topic'>
          <h2>{article.title}</h2>
          <Link to={`/topics/${article.topic}`}>
            <p className='Article__topic'>Topic: {article.topic}</p>
          </Link>
        </div>
        <div className='Article__details'>
          <p>
            Author: <b>{article.author}</b>
          </p>
          <p>{findDate(article)}</p>

          <p>{article.votes} votes</p>
          <p>{comments.length} comments</p>
        </div>
        <div className='Article__body-vote-container'>
          {/* VOTE BUTTONS */}
          <div className='Article__voting-container'>
            <button
              onClick={() => {
                incrementCount(1);
              }}
            >
              ⬆{' '}
            </button>
            <p>{count} 🖤 </p>
            <button
              onClick={() => {
                incrementCount(-1);
              }}
            >
              ⬇{' '}
            </button>
          </div>
          <div className='Article__body'>
            <article className='Article__body__inner-container'>
              {article.body}
            </article>
          </div>
        </div>
        <hr />
        <h2>Comments ({comments.length})</h2>
        <Comments
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </main>
  );
};

export default Article;
