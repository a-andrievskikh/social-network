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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts