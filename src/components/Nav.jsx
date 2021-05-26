import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { capitaliseString, setQuery } from '../utils/util';
import { UserContext } from '../contexts/User';
/*
  TODO

  - way of indicating if a topic or page is selected
  
*/

const Nav = ({ setQueryString }) => {
  const [topics, setTopics] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response);
      })
      .catch((err) => console.log(err));
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
                    setQuery(setQueryString, 'topic', topic.slug);
                  }}
                >
                  {capitalisedSlug}
                </li>
              </Link>
            );
          })}
        </ul>
      </DropdownButton>
      <p>{user}</p>
    </nav>
  );
};
export default Nav;
