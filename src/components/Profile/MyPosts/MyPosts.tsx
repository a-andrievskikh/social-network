import { Post } from './Post/Post'
import s from './MyPosts.module.css'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { postsSelectors } from 'components/Profile/MyPosts/myPost-selectors'
import { AddPostReduxForm, NewPostBodyT } from 'components/Profile/MyPosts/AddPostForm/AddPostForm'
import { addPostTC } from 'store/profile-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'

export const MyPosts = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(postsSelectors)

  const postsElements = posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

  const addNewPostHandler = (value: NewPostBodyT) => {
    if (value) dispatch(addPostTC(value.newPostBody))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddPostReduxForm onSubmit={addNewPostHandler} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}