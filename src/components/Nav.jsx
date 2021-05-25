import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { capitaliseString } from '../utils/util';

const Nav = ({ setQueryString }) => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  return (
    <nav className='Nav'>
      <Link
        to={'/'}
        onClick={() => {
          setQueryString({});
        }}
      >
        Home
      </Link>
      <DropdownButton id='dropdown-basic-button' title='Topics'>
        <ul>
          {topics.map((topic) => {
            const capitalisedSlug = capitaliseString(topic.slug);
            return (
              <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                <li
                  onClick={() => {
                    setQueryString((currQueryString) => {
                      const newQuery = { ...currQueryString };
                      newQuery.topic = topic.slug;
                      return newQuery;
                    });
                  }}
                >
                  {capitalisedSlug}
                </li>
              </Link>
            );
          })}
        </ul>
      </DropdownButton>
    </nav>
  );
};
export default Nav;
