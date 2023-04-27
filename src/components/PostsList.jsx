import NewPost from './NewPost';
import Post from './Post';
import styles from './PostsList.module.css';

function PostsList(props) {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author='Lawrence' body='This is from Lawrence' />
        <Post author='Larry' body='This is from Larry' />
      </ul>
    </>
  );
}

export default PostsList;
