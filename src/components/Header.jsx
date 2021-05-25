import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/' className='Header__title'>
        <h1>Northcoders News</h1>
      </Link>
      <p className='Header__subheader'>Social news and CRUD-dy content</p>
    </header>
  );
};
export default Header;
