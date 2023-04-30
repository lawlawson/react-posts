import { useState } from 'react';
import Modal from './Modal';

import NewPost from './NewPost';
import Post from './Post';
import styles from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Larry' body='This is from Larry' />
      </ul>
    </>
  );
}

export default PostsList;
