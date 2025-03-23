import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ForumList from './components/ForumList/ForumList'
import PostDetail from './components/PostDetail/PostDetail'
import CreatePost from './components/CreatePost/CreatePost'
import { ForumProvider } from './context/ForumContext'
import styles from './App.module.css'

function App() {
  return (
    <ForumProvider>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<ForumList />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </ForumProvider>
  )
}

export default App
