import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useForumContext } from '../../context/ForumContext'
import CommentForm from '../CommentForm/CommentForm'
import styles from './PostDetail.module.css'

function PostDetail() {
  const { id } = useParams()
  const { posts } = useForumContext()
  const post = posts.find(p => p.id === parseInt(id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className={styles.postDetail}>
      <h1>{post.title}</h1>
      <div className={styles.postMeta}>
        <span>By {post.author}</span>
        <span>•</span>
        <span>{format(post.date, 'MMM d, yyyy')}</span>
        <span>•</span>
        <span>{post.category}</span>
      </div>
      <div className={styles.content}>{post.content}</div>
      
      <div className={styles.comments}>
        <h2>Comments ({post.comments.length})</h2>
        {post.comments.map(comment => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.commentMeta}>
              <span>{comment.author}</span>
              <span>•</span>
              <span>{format(comment.date, 'MMM d, yyyy')}</span>
            </div>
            <div className={styles.commentContent}>{comment.content}</div>
          </div>
        ))}
      </div>
      
      <CommentForm postId={post.id} />
    </div>
  )
}

export default PostDetail
