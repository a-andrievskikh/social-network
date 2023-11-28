import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
/*import { Redirect } from 'react-router-dom'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector } from 'components/Header/header-selectors'*/

export const Profile = () => {

  /*const isLoggedIn = useAppSelector<boolean>(isLoggedInSelector)
  if (!isLoggedIn) return <Redirect to={'login'} />*/

  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}