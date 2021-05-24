import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/' className='Header__title'>
        <h1>Northcoders News</h1>
      </Link>
      <p>Social news and CRUDdy content</p>
    </header>
  );
};
export default Header;
