import DropdownButton from 'react-bootstrap/DropdownButton';
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
          {/* when clicked we want to add a sortBy param into */}
          <li
            onClick={() => {
              setQueryString((currQueryString) => {
                const newQuery = { ...currQueryString };
                newQuery.sort_by = 'created_at';

                return newQuery;
              });
            }}
          >
            Date Created
          </li>
          <li
            onClick={() => {
              setQueryString((currQueryString) => {
                const newQuery = { ...currQueryString };
                newQuery.sort_by = 'comment_count';

                return newQuery;
              });
            }}
          >
            Comment Count
          </li>
          <li
            onClick={() => {
              setQueryString((currQueryString) => {
                const newQuery = { ...currQueryString };
                newQuery.sort_by = 'votes';

                return newQuery;
              });
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
              setQueryString((currQueryString) => {
                const newQuery = { ...currQueryString };
                newQuery.order = 'asc';

                return newQuery;
              });
            }}
          >
            Ascending
          </li>
          <li
            onClick={() => {
              setQueryString((currQueryString) => {
                const newQuery = { ...currQueryString };
                newQuery.order = 'desc';

                return newQuery;
              });
            }}
          >
            Descending
          </li>
        </ul>
      </DropdownButton>
    </div>
  );
};
