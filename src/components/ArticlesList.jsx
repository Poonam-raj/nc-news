import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';
import { ListOrder } from './ListOrder';
import { Link } from 'react-router-dom';
import { capitaliseString } from '../utils/util';

const ArticlesList = ({ queryString, setQueryString }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  const checkTopic = () => {
    if (topic) {
      let capitalisedTopic = capitaliseString(topic);
      return `${capitalisedTopic} Articles`;
    } else return 'All Articles';
  };

  // if (topic) {
  //   setQueryString((currQueryString) => {
  //     const newQuery = { ...currQueryString };
  //     newQuery.topic = topic;
  //     return newQuery;
  //   });
  // }
  useEffect(() => {
    getArticles(queryString)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [queryString]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <main>
      <h2 className='ArticlesList__header'>{checkTopic()}</h2>
      <ListOrder setQueryString={setQueryString} />
      <div>
        {articles.map((article) => {
          return (
            <div key={article.article_id} className='ArticlesList__article'>
              <div className='ArticlesList__article__details'>
                <p>{article.author}</p>
                <p>{article.created_at}</p>
              </div>

              <Link
                to={`/${article.author}/${article.article_id}`}
                className='ArticlesList__article__link'
              >
                <h3>{article.title}</h3>
              </Link>
              <div className='ArticlesList__article__stats'>
                <p>{article.votes} votes 💟 </p>
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
