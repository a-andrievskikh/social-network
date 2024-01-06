import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector } from 'components/Header/header-selectors'
import { ownerIdSelector } from 'components/Auth/auth-selectors'

export const Profile = () => {
  const ownerID = useAppSelector(ownerIdSelector)
  const isLoggedIn = useAppSelector(isLoggedInSelector)
  
  if (!isLoggedIn) return <Navigate to={'/login'} />
  
  return (
    <div>
      <ProfileInfo />
      {!!ownerID && <MyPosts />}
    </div>
  )
}