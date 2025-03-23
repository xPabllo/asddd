import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { useForumContext } from '../../context/ForumContext'
import styles from './ForumList.module.css'

function ForumList() {
  const { posts } = useForumContext()

  return (
    <div className={styles.forumList}>
      <h1>Recent Discussions</h1>
      {posts.map(post => (
        <div key={post.id} className={styles.post}>
          <div className={styles.postHeader}>
            <Link to={`/post/${post.id}`} className={styles.title}>
              {post.title}
            </Link>
            <span className={styles.category}>{post.category}</span>
          </div>
          <div className={styles.postMeta}>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{format(post.date, 'MMM d, yyyy')}</span>
            <span>•</span>
            <span>{post.comments.length} comments</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ForumList
