import { useRef } from 'react'
import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { NewPostTextType, PostType } from '../../../store/profile-reducer'
import { addPostAC, updateNewPostTextAC } from '../../../store/profile-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../../store/store'

export const MyPosts = () => {
  const dispatch = useDispatch()

  const posts = useSelector<AppRootStateType, PostType[]>(state => state.profilePage.posts)
  const newPostText = useSelector<AppRootStateType, NewPostTextType>(state => state.profilePage.newPostText)

  const postsElements = posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

  const newPostElement = useRef<HTMLTextAreaElement>(null)

  const addPostClickHandler = () => {
    if (newPostElement.current) {
      dispatch(addPostAC())
    }
  }
  const updateNewPostTextChangeHandler = () => {
    if (newPostElement.current) {
      dispatch(updateNewPostTextAC(newPostElement.current.value))
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}
                    value={newPostText}
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