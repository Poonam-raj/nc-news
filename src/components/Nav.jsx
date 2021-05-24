import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => setTopics(response));
  }, []);

  return (
    <nav className='Nav'>
      <Link to={'/'}>Home</Link>
    </nav>
  );
};
export default Nav;
