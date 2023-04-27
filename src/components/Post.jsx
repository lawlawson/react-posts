import styles from './Post.module.css';

const names = ['Lawrence', 'Larry'];

function Post(props) {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
}

export default Post;
