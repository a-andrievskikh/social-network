import React, { FC } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { PostType } from '../../../index'

type PostPropsType = {
  posts: PostType[]
}

export const MyPosts: FC<PostPropsType> = (props) => {
  const postsElements = props.posts
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