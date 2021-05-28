import { Link } from 'react-router-dom';
import Votes from './Votes';
import * as utils from '../utils/util';
import { useEffect, useState } from 'react';
import * as articlesAPI from '../utils/api';

// split loading into a component

const ArticleCards = ({ articleID, voteTally, setVoteTally }) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    articlesAPI
      .getArticleByID(articleID)
      .then((response) => {
        if (isMounted) {
          setArticle(response);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
    return () => {
      isMounted = false;
    };
  }, [articleID]);

  if (isError) return <p>Oops something went wrong</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div key={article.article_id} className='ArticlesList__article'>
      <div className='ArticlesList__article__details'>
        <p>
          <b>{article.author}</b>
        </p>
        <p>{utils.findDate(article)}</p>
      </div>

      <Link
        to={`/${article.author}/${article.article_id}`}
        className='ArticlesList__article__link'
      >
        <h3>{article.title}</h3>
      </Link>
      <Votes
        article={article}
        setArticle={setArticle}
        voteTally={voteTally}
        setVoteTally={setVoteTally}
      />
      <div className='ArticlesList__article__stats'>
        <p>{article.votes} votes 🖤</p>
        <p>{article.comment_count} comments 💬 </p>
      </div>
    </div>
  );
};

export default ArticleCards;
