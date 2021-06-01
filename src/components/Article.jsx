import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import * as articlesAPI from '../utils/api';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import { findDate } from '../utils/util';
import Votes from './Votes';
import Loading from './Loading';

const Article = ({ voteTally, setVoteTally }) => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    articlesAPI
      .getArticleByID(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [article_id, article.votes]);

  if (isError) return <Redirect to='/404' />;
  if (isLoading) return <Loading />;
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
          <Votes
            article={article}
            setArticle={setArticle}
            voteTally={voteTally}
            setVoteTally={setVoteTally}
          />
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
