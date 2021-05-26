import DropdownButton from 'react-bootstrap/DropdownButton';
import { setQuery } from '../utils/util';

export const ListOrder = ({ setQueryString }) => {
  const sortBySlug = ['created_at', 'comment_count', 'votes'];
  const sortByName = ['Date Created', 'Comment Count', 'Votes'];

  const orderBySlug = ['asc', 'desc'];
  const orderByName = ['Ascending', 'Descending'];

  return (
    <div className='ArticlesList__options'>
      <DropdownButton
        id='dropdown-basic-button'
        title='Sort by'
        className='ArticlesList__sort-by'
      >
        <ul>
          {sortBySlug.map((item, i) => {
            return (
              <li
                key={item}
                onClick={() => {
                  setQuery(setQueryString, 'sort_by', item);
                }}
              >
                {sortByName[i]}
              </li>
            );
          })}
        </ul>
      </DropdownButton>
      <DropdownButton
        id='dropdown-basic-button'
        title='Order by'
        className='ArticlesList__order-by'
      >
        <ul>
          {orderBySlug.map((item, i) => {
            return (
              <li
                key={item}
                onClick={() => {
                  setQuery(setQueryString, 'order', item);
                }}
              >
                {orderByName[i]}
              </li>
            );
          })}
        </ul>
      </DropdownButton>
    </div>
  );
};
