import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as articlesAPI from '../utils/api';
import { ListOrder } from './ListOrder';
import * as utils from '../utils/util';
import ArticleCards from './ArticleCards';

const ArticlesList = ({
  queryString,
  setQueryString,
  voteTally,
  setVoteTally
}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    utils.setQuery(setQueryString, 'topic', topic);
  }, [setQueryString, topic]);

  useEffect(() => {
    articlesAPI
      .getArticles(queryString)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [setQueryString, queryString]);

  if (isError) return <p>Oops something went wrong</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <main>
      <h2 className='ArticlesList__header'>
        {topic ? `${utils.capitaliseString(topic)} Articles` : `All Articles`}
      </h2>
      <ListOrder setQueryString={setQueryString} />
      <div className='ArticlesList__container'>
        {articles.map((article, i) => {
          return (
            <ArticleCards
              articleID={article.article_id}
              key={article.article_id}
              voteTally={voteTally}
              setVoteTally={setVoteTally}
              i={i}
            />
          );
        })}
      </div>
    </main>
  );
};
export default ArticlesList;
