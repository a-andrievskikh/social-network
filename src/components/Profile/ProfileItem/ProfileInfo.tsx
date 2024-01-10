import s from './ProfileInfo.module.css'
import { Preloader } from 'common/preloader/Preloader'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { NavLink, useParams } from 'react-router-dom'
import { ProfileStatus } from './ProfileStatus'
import defaultUserLogo from 'assets/images/default-user-logo.jpg'
import { ownerIdSelector } from 'components/Auth/auth-selectors'
import { aboutMeSelector, profileSelector } from 'components/Profile/profile-selector'
import { useEffect } from 'react'
import { getUserProfileTC, getUserStatusTC } from 'store/profile-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'

export const ProfileInfo = () => {
  const { userID } = useParams<any>()
  
  const dispatch = useAppDispatch()
  const profile = useAppSelector(profileSelector)
  const aboutMe = useAppSelector(aboutMeSelector)
  const ownerID = useAppSelector(ownerIdSelector)
  
  useEffect(() => {
    dispatch(getUserProfileTC(userID ? +userID : ownerID))
    dispatch(getUserStatusTC(userID ? +userID : ownerID))
  }, [])
  
  if (!Object.keys(profile).length) return <Preloader />
  
  return (
    <div>
      <div className={s.descriptionBlock}>
        <p>User ID: {profile.userId}</p>
        <img className={s.logo}
             src={profile.photos.large || defaultUserLogo}
             alt="user's large avatar"
        />
        <div>Name: {profile.fullName}</div>
        <p>About me: {aboutMe || 'Information not yet provided'}</p>
        <div>Status: <ProfileStatus /></div>
        <div>
          <NavLink to={'/users'}>
            <button>Back to Users</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}