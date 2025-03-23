import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Outdoor Forum
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/create" className={styles.link}>Create Post</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
