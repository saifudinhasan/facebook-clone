import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

// FIRESTORE
import database from '../../firebase'
import { useEffect, useState } from 'react'

export default function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    database.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
        <Post
          key={post.id}
          docID={post.id}
          profilePict={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}