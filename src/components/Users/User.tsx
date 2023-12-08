import { setFollowTC, setUnfollowTC, UserType } from 'store/users-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { followingInProgressSelector } from 'components/Users/users-selectors'
import { setUserProfileTC } from 'store/profile-reducer'
import { NavLink } from 'react-router-dom'
import userAvatar from 'assets/images/rick.jpg'
import s from './User.module.css'
import { ownerIdSelector } from 'components/Auth/auth-selectors'

export const User = ({ user }: UserPT) => {
  const dispatch = useAppDispatch()
  const followingInProgress = useAppSelector(followingInProgressSelector)
  const ownerID = useAppSelector(ownerIdSelector)
  const follow = (userID: number) => dispatch(setFollowTC(userID))
  const unfollow = (userID: number) => dispatch(setUnfollowTC(userID))
  const profileHandler = (userID: number) => {
    dispatch(setUserProfileTC(ownerID === userID ? ownerID : userID))
  }

  const isDisabled = followingInProgress.some(id => id === user.id)

  return (
    <div key={user.id} className={s.user}>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img src={!user.photos.small ? userAvatar : user.photos.small}
               alt="user's avatar"
               onClick={() => profileHandler(user.id)}
          />
        </NavLink>
      </div>
      {
        user.followed && <button onClick={() => unfollow(user.id)}
                                 disabled={isDisabled}
        >Unfollow</button>
      }
      {
        !user.followed && <button onClick={() => follow(user.id)}
                                  disabled={isDisabled}
        >Follow</button>
      }
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </div>
      {/*<div>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
      </div>*/}
    </div>
  )
}
type UserPT = {
  user: UserType
}