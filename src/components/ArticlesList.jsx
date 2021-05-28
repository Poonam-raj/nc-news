import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as articlesAPI from '../utils/api';
import { ListOrder } from './ListOrder';
import { Link } from 'react-router-dom';
import { capitaliseString, setQuery, findDate } from '../utils/util';

/*
  TODO
  - put voting functionality into article cards
  - max one vote in either direction per page load
  
*/

const ArticlesList = ({ queryString, setQueryString }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setQuery(setQueryString, 'topic', topic);
  }, []);

  useEffect(() => {
    articlesAPI
      .getArticles(queryString)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [topic, setQueryString, queryString]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <main>
      <h2 className='ArticlesList__header'>
        {topic ? `${capitaliseString(topic)} Articles` : `All Articles`}
      </h2>
      <ListOrder setQueryString={setQueryString} />
      <div className='ArticlesList__container'>
        {articles.map((article) => {
          return (
            <div key={article.article_id} className='ArticlesList__article'>
              <div className='ArticlesList__article__details'>
                <p>
                  <b>{article.author}</b>
                </p>
                <p>{findDate(article)}</p>
              </div>

              <Link
                to={`/${article.author}/${article.article_id}`}
                className='ArticlesList__article__link'
              >
                <h3>{article.title}</h3>
              </Link>
              <div className='ArticlesList__article__stats'>
                <p>{article.votes} votes 🖤</p>
                <p>{article.comment_count} comments 💬 </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default ArticlesList;
