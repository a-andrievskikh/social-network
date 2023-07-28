import React, { FC, useRef } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { ActionsType, NewPostTextType, PostType } from '../../../redux/state'

type PostPropsType = {
  posts: PostType[]
  newPostText: NewPostTextType
  dispatch: (action: ActionsType) => void
}

export const MyPosts: FC<PostPropsType> = (props) => {
  const postsElements = props.posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

  const newPostElement = useRef<HTMLTextAreaElement>(null)

  const handleAddPostClick = () => {
    if (newPostElement.current) {
      props.dispatch({type: 'ADD-POST'})
    }
  }
  const handleUpdateNewPostTextChange = () => {
    if (newPostElement.current) {
      props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value})
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}
                    value={props.newPostText}
                    onChange={handleUpdateNewPostTextChange}
          />
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