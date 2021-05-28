import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as articlesAPI from '../utils/api';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import { findDate } from '../utils/util';
import Votes from './Votes';

/* TODO


- error handle when topic is bad - does it need to go straight to all topics or give an error page(?)
- errro handle when incorrect article ID is put in - like a lil P tag with an 'oops' statement - resuable?
- like an error component which served when an error is caught (using state)


*/

const Article = ({ voteTally, setVoteTally }) => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    articlesAPI
      .getArticleByID(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [article_id, article.votes]);

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
