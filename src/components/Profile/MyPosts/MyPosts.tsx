import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'

function MyPosts() {
  return (
    <div className={style.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div>
          <button>Remove post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message={`Hi, how are you?`} likesCount={15} />
        <Post message={`It's my first project.`} likesCount={20} />
      </div>
    </div>
  )
}

export default MyPosts