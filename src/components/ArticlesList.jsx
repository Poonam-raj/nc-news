import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';
import { ListOrder } from './ListOrder';
import { Link } from 'react-router-dom';
import { capitaliseString } from '../utils/util';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const { topic } = useParams();
  const capitalisedTopic = capitaliseString(topic);

  useEffect(() => {
    getArticles(topic).then((response) => {
      setArticles(response);
    });
  }, [topic]);

  return (
    <main>
      <h2 className='ArticlesList__header'>
        {topic ? `${capitalisedTopic} Articles` : 'All Articles'}
      </h2>
      <ListOrder />
      <div>
        {articles.map((article) => {
          return (
            <div key={article.article_id} className='ArticlesList__article'>
              <div className='ArticlesList__article__details'>
                <p>{article.author}</p>
                <p>{article.created_at}</p>
              </div>

              <Link to={`/${article.author}/${article.article_id}`}>
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
