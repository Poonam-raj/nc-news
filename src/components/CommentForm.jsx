import * as articlesAPI from '../utils/api';
import { UserContext } from '../contexts/User';
import { useContext, useState } from 'react';

const CommentForm = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComm = { username: user, body: newComment };
    //POST only works when it's an existing user
    articlesAPI
      .postComment(article_id, newComm)
      .then((response) => {
        setComments((currComments) => {
          return [response, ...currComments];
        });
      })
      .catch((err) => console.log(err)); //way of indicating error if submission failed
    setNewComment('');
  };

  return (
    <form onSubmit={handleSubmit} className='Comments__form'>
      <label htmlFor='newComment'>
        Submit a comment as <b>{user}</b>{' '}
      </label>
      <input
        required
        type='text'
        id='newComment'
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />

      <button type='submit'>Post Comment</button>
    </form>
  );
};

export default CommentForm;
