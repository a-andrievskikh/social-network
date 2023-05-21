import React from 'react'
import Post from './Post/Post'
import styles from './MyPosts.module.css'

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
        <Post message={`Hi, how are you?`} likesCount={15} />
        <Post message={`It's my first project.`} likesCount={20} />
      </div>
    </div>
  )
}

export default MyPosts