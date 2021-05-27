import { useState } from 'react';
import { setQuery } from '../utils/util';

/*
  TODO
    - dropdowns need to close when clicked
*/

export const ListOrder = ({ setQueryString }) => {
  const sortBySlug = ['created_at', 'comment_count', 'votes'];
  const sortByName = ['Date Created', 'Comment Count', 'Votes'];

  const orderBySlug = ['asc', 'desc'];
  const orderByName = ['Ascending', 'Descending'];
  const [sortedFilterMsg, setSortedFilterMsg] = useState({
    sort: 'Date Created',
    order: 'Descending'
  });

  return (
    <>
      <div className='ListOrder__options'>
        <button className='dropdown'>
          Sort By
          <ul className='dropdown-content'>
            {sortBySlug.map((item, i) => {
              return (
                <li
                  className='dropdown__item'
                  key={item}
                  onClick={() => {
                    setQuery(setQueryString, 'sort_by', item);
                    setSortedFilterMsg((currMsg) => {
                      const newMsg = { ...currMsg, sort: sortByName[i] };
                      return newMsg;
                    });
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
                  className='dropdown__item'
                  key={item}
                  onClick={() => {
                    setQuery(setQueryString, 'order', item);
                    setSortedFilterMsg((currMsg) => {
                      const newMsg = { ...currMsg, order: orderByName[i] };
                      return newMsg;
                    });
                  }}
                >
                  {orderByName[i]}
                </li>
              );
            })}
          </ul>
        </button>
      </div>{' '}
      <div className='ListOrder__sort-statement-container'>
        <p className='ListOrder__sort-statement'>
          Sorted by {sortedFilterMsg.sort}, in {sortedFilterMsg.order} order.
        </p>
      </div>
    </>
  );
};
