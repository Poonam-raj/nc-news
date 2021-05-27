import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';

const Header = ({ setQueryString }) => {
  const { user } = useContext(UserContext);
  return (
    <header className='Header'>
      <div className='Header__subcontainer'>
        <Link
          to='/'
          className='Header__title'
          onClick={() => {
            setQueryString({});
          }}
        >
          <h1>Northcoders News</h1>
        </Link>
        <p className='Header__subheader'>Social news and CRUD-dy content</p>
      </div>
      <p className='Header__user'>{user}</p>
    </header>
  );
};
export default Header;
