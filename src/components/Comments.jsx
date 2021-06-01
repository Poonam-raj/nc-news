import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import * as articlesAPI from '../utils/api';
import CommentCards from './CommentCards';
import CommentForm from './CommentForm';
import Loading from './Loading';
/*
  TODO
  Requires further API functionality:
 - voting on comments
 - max one vote in either direction per page load
 - comment deletion (only available when it's user's comment)

*/

const Comments = ({ article_id, comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    articlesAPI
      .getCommentsByID(article_id)
      .then((response) => {
        setComments(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [article_id, setComments]);

  if (isError) return <Redirect to='/404' />;
  if (isLoading) return <Loading />;

  return (
    <section className='Comments__container'>
      <CommentForm article_id={article_id} setComments={setComments} />
      {comments.map((comment) => {
        return <CommentCards comment={comment} key={comment.comment_id} />;
      })}
    </section>
  );
};

export default Comments;
