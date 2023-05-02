import { useState } from 'react';
import Modal from './Modal';

import NewPost from './NewPost';
import Post from './Post';
import styles from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author='Larry' body='This is from Larry' />
      </ul>
    </>
  );
}

export default PostsList;
