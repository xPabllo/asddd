import { createContext, useContext, useState } from 'react'

const ForumContext = createContext()

export function ForumProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Best Hiking Trails in the Rockies',
      content: 'Share your favorite hiking trails in the Rocky Mountains...',
      author: 'mountain_lover',
      category: 'Hiking',
      date: new Date('2023-05-15'),
      comments: [
        {
          id: 1,
          content: 'The Continental Divide Trail is amazing!',
          author: 'trail_runner',
          date: new Date('2023-05-16')
        }
      ]
    },
    {
      id: 2,
      title: 'Camping Gear Recommendations',
      content: 'Looking for lightweight camping gear suggestions...',
      author: 'camp_expert',
      category: 'Camping',
      date: new Date('2023-05-14'),
      comments: []
    }
  ])

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1, comments: [] }])
  }

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { ...comment, id: post.comments.length + 1 }]
        }
      }
      return post
    }))
  }

  return (
    <ForumContext.Provider value={{ posts, addPost, addComment }}>
      {children}
    </ForumContext.Provider>
  )
}

export function useForumContext() {
  return useContext(ForumContext)
}
