export const ListOrder = () => {
  return (
    <div className='ArticlesList__options'>
      <div className='ArticlesList__sort-by'>
        <h3 className='ArticlesList__options__header'>Sort by</h3>
        <ul>
          <li>Date Created</li>
          <li>Comment Count</li>
          <li>Votes</li>
        </ul>
      </div>
      <div className='ArticlesList__order-by'>
        <h3 className='ArticlesList__options__header'>Order by</h3>
        <ul>
          <li>Ascending</li>
          <li>Descending</li>
        </ul>
      </div>
    </div>
  );
};
