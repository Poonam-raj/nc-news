import DropdownButton from 'react-bootstrap/DropdownButton';
import { setQuery } from '../utils/util';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Link } from 'react-router-dom';

export const ListOrder = ({ setQueryString }) => {
  return (
    <div className='ArticlesList__options'>
      <DropdownButton
        id='dropdown-basic-button'
        title='Sort by'
        className='ArticlesList__sort-by'
      >
        <ul>
          <li
            onClick={() => {
              setQuery(setQueryString, 'sort_by', 'created_at');
            }}
          >
            Date Created
          </li>
          <li
            onClick={() => {
              setQuery(setQueryString, 'sort_by', 'comment_count');
            }}
          >
            Comment Count
          </li>
          <li
            onClick={() => {
              setQuery(setQueryString, 'sort_by', 'votes');
            }}
          >
            Votes
          </li>
        </ul>
      </DropdownButton>
      <DropdownButton
        id='dropdown-basic-button'
        title='Order by'
        className='ArticlesList__order-by'
      >
        <ul>
          <li
            onClick={() => {
              setQuery(setQueryString, 'order', 'asc');
            }}
          >
            Ascending
          </li>
          <li
            onClick={() => {
              setQuery(setQueryString, 'order', 'desc');
            }}
          >
            Descending
          </li>
        </ul>
      </DropdownButton>
    </div>
  );
};
