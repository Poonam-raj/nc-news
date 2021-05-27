import { useContext, useEffect, useState } from 'react';
import * as articlesAPI from '../utils/api';
import { UserContext } from '../contexts/User';
/*
  TODO

 - voting on comments

*/

const Comments = ({ article_id, comments, setComments }) => {
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
    <section className='Comments__container'>
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

      {comments.map((comment) => {
        return (
          <li className='Comments__list-item' key={comment.comment_id}>
            <div className='Comments__list-item__inner-container'>
              <div className='Comments__details'>
                <h3 className='Comments__author'>{comment.author}</h3>
                <p className='Comments__votes'>{comment.votes} votes</p>
              </div>
              <p className='Comments__body'>{comment.body}</p>
            </div>
          </li>
        );
      })}
    </section>
  );
};

export default Comments;
