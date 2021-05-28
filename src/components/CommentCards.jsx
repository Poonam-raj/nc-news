/*
  TODO
  Requires further API functionality:
 - voting on comments
 - max one vote in either direction per page load
 - comment deletion (only available when it's user's comment)


*/

const CommentCards = ({ comment }) => {
  return (
    <li className='Comments__list-item'>
      <div className='Comments__list-item__inner-container'>
        <div className='Comments__details'>
          <h3 className='Comments__author'>{comment.author}</h3>
          {/* <p className='Comments__votes'>{comment.votes} votes</p> */}
        </div>
        <p className='Comments__body'>{comment.body}</p>
      </div>
    </li>
  );
};

export default CommentCards;
