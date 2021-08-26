import React from 'react';
import { userContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const { login } = React.useContext(userContext);
  const [comments, setComments] = React.useState(() => props.comments); // esse callback vai rodar so uma vez e vai definir o estado inicial
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  // para senore que abrir a foto o scroll va para o final onde está os comentários mais recentes

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.singles ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
