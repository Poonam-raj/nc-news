import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const ListOrder = () => {
  return (
    <div className='ArticlesList__options'>
      <DropdownButton
        id='dropdown-basic-button'
        title='Sort by'
        className='ArticlesList__sort-by'
      >
        <Dropdown.Item href='#/action-1'>Date Created</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Comment Count</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Votes</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id='dropdown-basic-button'
        title='Order by'
        className='ArticlesList__order-by'
      >
        <Dropdown.Item href='#/action-1'>Ascending</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Descending</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
