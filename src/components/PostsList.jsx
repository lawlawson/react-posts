import { useState } from 'react';
import Modal from './Modal';

import NewPost from './NewPost';
import Post from './Post';
import styles from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author='Larry' body='This is from Larry' />
      </ul>
    </>
  );
}

export default PostsList;
