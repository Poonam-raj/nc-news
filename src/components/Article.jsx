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
        {/* need a votes button here */}
        <article className='Article__body'>{article.body}</article>
        <hr />
        <h2>Comments ({article.comment_count})</h2>
        <Comments article_id={article_id} />
      </div>
    </main>
  );
};

export default Article;
