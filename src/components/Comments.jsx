import { useContext, useEffect, useState } from 'react';
import * as articlesAPI from '../utils/api';
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
    articlesAPI
      .getCommentsByID(article_id)
      .then((response) => {
        setComments(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, [article_id]);

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
      .catch((err) => console.log(err));
    setNewComment('');
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <section>
      <form className='Comments__form' onSubmit={handleSubmit}>
        <label htmlFor='newComment'>Submit a comment as {user} </label>
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
