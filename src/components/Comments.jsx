import { useContext, useEffect, useState } from 'react';
import { getCommentsByID, postComment } from '../utils/api';
import { UserContext } from '../contexts/User';
/*
  TODO

 - voting on comments

*/

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getCommentsByID(article_id)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => console.log(err));
    return () => {
      setIsLoading(false);
    };
  }, [article_id, comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComm = { username: user, body: newComment };
    //POST only works when it's an existing user
    postComment(article_id, newComm).catch((err) => console.log(err));
    setNewComment('');
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <section>
      <form className='Comments__form' onSubmit={handleSubmit}>
        <label>
          Submit a comment as {user}
          <input
            type='text'
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
        </label>
        <button type='submit'>Post Comment</button>
      </form>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <div className='Comments'>
                <div className='Comments__details'>
                  <h3 className='Comments__author'>{comment.author}</h3>
                  <p className='Comments__votes'>{comment.votes} votes</p>
                </div>

                <p className='Comments__body'>{comment.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
