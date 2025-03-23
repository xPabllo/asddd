import { useState } from 'react'
import { useForumContext } from '../../context/ForumContext'
import styles from './CommentForm.module.css'

function CommentForm({ postId }) {
  const { addComment } = useForumContext()
  const [formData, setFormData] = useState({
    author: '',
    content: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addComment(postId, {
      ...formData,
      date: new Date()
    })
    setFormData({ author: '', content: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.commentForm}>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="author">Your Name</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Comment</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <button type="submit">Post Comment</button>
      </form>
    </div>
  )
}

export default CommentForm
