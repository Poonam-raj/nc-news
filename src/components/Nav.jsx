import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { capitaliseString } from '../utils/util';

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  return (
    <nav className='Nav'>
      <Link to={'/'}>Home</Link>
      <DropdownButton id='dropdown-basic-button' title='Topics'>
        {topics.map((topic, i) => {
          const capitalisedSlug = capitaliseString(topic.slug);
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <Dropdown.Item href={`#/action-${i}`}>
                {capitalisedSlug}
              </Dropdown.Item>
            </Link>
          );
        })}
      </DropdownButton>
    </nav>
  );
};
export default Nav;
