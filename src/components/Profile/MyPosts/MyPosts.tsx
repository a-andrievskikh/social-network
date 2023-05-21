import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Post remove</button>
      </div>
      <div className={styles.posts}>
        <Post message={`Hi, how are you?`} likeCount={15} />
        <Post message={`It's my first project.`} likeCount={20} />
      </div>
    </div>
  )
}

export default MyPosts