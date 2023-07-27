import React, { FC, useRef } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { PostType } from '../../../redux/state'

type PostPropsType = {
  posts: PostType[]
  addPost: (postMessage: string) => void
}

export const MyPosts: FC<PostPropsType> = (props) => {
  const postsElements = props.posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

  const newPostElement = useRef<HTMLTextAreaElement>(null)

  const handleAddPostClick = () => {
    if (newPostElement.current?.value) {
      props.addPost(newPostElement.current.value)
      newPostElement.current.value = ''
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
        </div>
        <div>
          <button onClick={handleAddPostClick}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}