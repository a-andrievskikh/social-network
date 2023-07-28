import React, { FC, useRef } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import {
  ActionsType,
  NewPostTextType,
  PostType,
  addPostAC,
  updateNewPostTextAC,
} from '../../../redux/state'

type PostPropsType = {
  posts: PostType[]
  newPostText: NewPostTextType
  dispatch: (action: ActionsType) => void
}

export const MyPosts: FC<PostPropsType> = (props) => {
  const postsElements = props.posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

  const newPostElement = useRef<HTMLTextAreaElement>(null)

  const addPostClickHandler = () => {
    if (newPostElement.current) {
      const action = addPostAC()
      props.dispatch(action)
    }
  }
  const updateNewPostTextChangeHandler = () => {
    if (newPostElement.current) {
      const action = updateNewPostTextAC(newPostElement.current.value)
      props.dispatch(action)
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}
                    value={props.newPostText}
                    onChange={updateNewPostTextChangeHandler}
          />
        </div>
        <div>
          <button onClick={addPostClickHandler}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}