import s from './ProfileInfo.module.css'
import { Preloader } from 'common/preloader/Preloader'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { aboutMeSelector, profileSelector } from 'components/Profile/ProfileItem/profileInfo-selectors'
import { NavLink } from 'react-router-dom'
import { ProfileStatus } from './ProfileStatus'
import userPhoto from 'assets/images/rick.jpg'
import { ownerIdSelector } from 'components/Auth/auth-selectors'

export const ProfileInfo = () => {
  // const dispatch = useAppDispatch()
  const profile = useAppSelector(profileSelector)
  const aboutMe = useAppSelector(aboutMeSelector)
  const ownerID = useAppSelector(ownerIdSelector)
  /*useEffect(() => {
    dispatch(getUserStatusTC(profile.userId))
  }, [profile.userId])*/

  if (!Object.keys(profile).length) return <Preloader />

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img className={s.logo}
             src={profile.photos.large || userPhoto}
             alt="user's large photo"
        />
        {}
        <div>Name: {profile.fullName}</div>
        <p>About me: {aboutMe || 'Information not yet provided'}</p>
        <p>User ID: {profile.userId}</p>
        <div>Profile Status: <ProfileStatus /></div>
      </div>
      <div>
        <NavLink to={'/users'}>
          <button>Back to Users</button>
        </NavLink>
      </div>
    </div>
  )
}