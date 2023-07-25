import React from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'

type PostDataType = {
  id: number
  message: string
  likesCount: number
}

export const MyPosts = () => {
  const posts: PostDataType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first project.', likesCount: 20},
  ]

  const postsElements = posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
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
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}