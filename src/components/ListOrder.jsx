import Dropdown from 'react-bootstrap/Dropdown';

export const ListOrder = () => {
  return (
    <div className='ArticlesList__options'>
      <Dropdown className='ArticlesList__sort-by'>
        <Dropdown.Toggle
          variant='success'
          id='dropdown-basic'
          className='ArticlesList__options__header'
        >
          Sort by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Date Created</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Comment Count</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Votes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className='ArticlesList__sort-by'>
        <Dropdown.Toggle
          variant='success'
          id='dropdown-basic'
          className='ArticlesList__options__header'
        >
          Order by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Ascending</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
