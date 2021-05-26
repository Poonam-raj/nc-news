import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';
import { ListOrder } from './ListOrder';
import { Link } from 'react-router-dom';
import { capitaliseString, setQuery } from '../utils/util';

/*
  TODO

  - keep topic filter upon refresh
  
*/

const ArticlesList = ({ queryString, setQueryString }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  // console.log('param check ', topic);

  /*is running in follwing order:
  Line:
  19
  api(line 13)
  useEffect
  19
  19
*/
  useEffect(() => {
    // if (topic) {
    //   setQuery(setQueryString, 'topic', topic);
    //   // console.log('amended query is', queryString);
    // }
    getArticles(queryString)
      .then((response) => {
        // console.log('loaded query', queryString);
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [topic, queryString]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <main>
      <h2 className='ArticlesList__header'>
        {topic ? `${capitaliseString(topic)} Articles` : `All Articles`}
      </h2>
      <ListOrder setQueryString={setQueryString} />
      <>
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
      </>
    </main>
  );
};
export default ArticlesList;
