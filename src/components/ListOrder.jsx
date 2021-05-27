import { setQuery } from '../utils/util';

/*
  TODO

  - a way of knowing if a order has been selected - visual indication of active sorting order
    - dropdowns need to close when clicked
*/

export const ListOrder = ({ setQueryString }) => {
  const sortBySlug = ['created_at', 'comment_count', 'votes'];
  const sortByName = ['Date Created', 'Comment Count', 'Votes'];

  const orderBySlug = ['asc', 'desc'];
  const orderByName = ['Ascending', 'Descending'];

  return (
    <div className='ArticlesList__options'>
      <button className='dropdown'>
        Sort By
        <ul className='dropdown-content'>
          {sortBySlug.map((item, i) => {
            return (
              <li
                className='ArticlesList__dropdown__item'
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
      </button>
      <button className='dropdown'>
        Order by
        <ul className='dropdown-content'>
          {orderBySlug.map((item, i) => {
            return (
              <li
                className='ArticlesList__dropdown__item'
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
      </button>
    </div>
  );
};
