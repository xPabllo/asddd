import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForumContext } from '../../context/ForumContext'
import styles from './CreatePost.module.css'

function CreatePost() {
  const navigate = useNavigate()
  const { addPost } = useForumContext()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: 'Hiking'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addPost({
      ...formData,
      date: new Date()
    })
    navigate('/')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.createPost}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Hiking">Hiking</option>
            <option value="Camping">Camping</option>
            <option value="Climbing">Climbing</option>
            <option value="Cycling">Cycling</option>
          </select>
        </div>

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
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="6"
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost
