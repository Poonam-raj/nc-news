import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as articlesAPI from '../utils/api';
import { capitaliseString, setQuery } from '../utils/util';
import { UserContext } from '../contexts/User';

/*
  TODO

  if topic button is clicked, show the list
  if a topic is clicked then default to original hidden state
  
*/

const Nav = ({ setQueryString }) => {
  const [topics, setTopics] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    articlesAPI
      .getTopics()
      .then((response) => {
        setTopics(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className='Nav'>
      <Link
        className='Nav__item'
        to={'/'}
        onClick={() => {
          setQueryString({});
        }}
      >
        Home
      </Link>
      <button className='Nav__dropdown dropdown Nav__item'>
        {' '}
        Topics
        <ul className='dropdown-content'>
          {topics.map((topic) => {
            const capitalisedSlug = capitaliseString(topic.slug);
            return (
              <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                <li
                  className='dropdown__item'
                  onClick={() => {
                    setQuery(setQueryString, 'topic', topic.slug);
                  }}
                >
                  {capitalisedSlug}
                </li>
              </Link>
            );
          })}
        </ul>
      </button>
      {topics.map((topic) => {
        const capitalisedSlug = capitaliseString(topic.slug);
        return (
          <Link
            to={`/topics/${topic.slug}`}
            key={topic.slug}
            className='Nav__topic Nav__item'
            onClick={() => {
              setQuery(setQueryString, 'topic', topic.slug);
            }}
          >
            {capitalisedSlug}
          </Link>
        );
      })}
      <p className='Nav__user Nav__item'>{user}</p>
    </nav>
  );
};
export default Nav;
