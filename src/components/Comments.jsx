import { useEffect, useState } from 'react';
import { getCommentsByID } from '../utils/api';

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByID(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  return (
    <section>
      <p>form</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <div className='Comments__details'>
                <h3 className='Comments__author'>{comment.author}</h3>
                <p className='Comments__votes'>{comment.votes} votes</p>
              </div>

              <p className='Comments__body'>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
