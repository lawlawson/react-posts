import styles from './Post.module.css';

const names = ['Lawrence', 'Larry'];

function Post({ author, body }) {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </div>
  );
}

export default Post;
