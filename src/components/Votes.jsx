import { useEffect, useState } from 'react';
import * as articlesAPI from '../utils/api';

/*
    TODO
    - max one vote in either direction per page load PER ARTICLE
*/

const Votes = ({ article, setArticle, voteTally, setVoteTally }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(article.votes);
  }, [article.votes]);

  const incrementCount = (increment) => {
    setCount((currCount) => {
      return currCount + increment;
    });
    setVoteTally((currVoteTally) => {
      return currVoteTally + increment;
    });
    articlesAPI
      .patchArticleVotes(article.article_id, { inc_votes: increment })
      .then((response) => {
        setArticle(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='Votes'>
      <button
        disabled={voteTally >= 1}
        onClick={() => {
          incrementCount(1);
        }}
      >
        ⬆{' '}
      </button>
      <p>{count} 🖤 </p>
      <button
        disabled={voteTally <= -1}
        onClick={() => {
          incrementCount(-1);
        }}
      >
        ⬇{' '}
      </button>
    </div>
  );
};

export default Votes;
