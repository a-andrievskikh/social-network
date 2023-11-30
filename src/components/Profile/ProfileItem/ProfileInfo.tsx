import s from './ProfileInfo.module.css'
import { Preloader } from 'common/preloader/Preloader'
import { useAppSelector } from 'common/hooks/useAppSelector'
import {
  aboutMeSelector,
  largePhotoSelector,
  profileSelector,
} from 'components/Profile/ProfileItem/profileInfo-selectors'
// import banner from 'assets/images/banner.png'
import { NavLink } from 'react-router-dom'
import { ProfileStatus } from './ProfileStatus'
import rick from 'assets/images/rick.jpg'

export const ProfileInfo = () => {
  // const dispatch = useAppDispatch()
  const profile = useAppSelector(profileSelector)
  const largePhoto = useAppSelector(largePhotoSelector)
  const aboutMe = useAppSelector(aboutMeSelector)

  /*useEffect(() => {
    dispatch(getUserStatusTC(profile.userId))
  }, [profile.userId])*/

  if (!Object.keys(profile).length) return <Preloader />

  return (
    <div>
      {/*<div className={`${s.descriptionBlock} ${s.banner}`}>*/}
      {/*  <img src={banner}*/}
      {/*       alt="user's banner" />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
        <img className={s.logo}
             src={largePhoto || rick}
             alt="user's large photo" />
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

// default ava "https://i.pinimg.com/originals/7e/73/1f/7e731f9fcfc7bd222e14c2e6850c69db.jpg"