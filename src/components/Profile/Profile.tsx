import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from 'store/store'

export const Profile = () => {

  const dispatch = useDispatch()
  const userID = useSelector<AppRootStateType, number>(state => state.profilePage.profile.userId)


  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}