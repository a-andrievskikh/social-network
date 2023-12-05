import { setFollowTC, setUnfollowTC, UserType } from 'store/users-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { followingInProgressSelector } from 'components/Users/users-selectors'
import { setUserProfileTC } from 'store/profile-reducer'
import { NavLink } from 'react-router-dom'
import userAvatar from 'assets/images/rick.jpg'

export const User = ({ user }: UserPT) => {
  const dispatch = useAppDispatch()
  const followingInProgress = useAppSelector(followingInProgressSelector)
  const follow = async (userID: number) => dispatch(setFollowTC(userID))
  const unfollow = async (userID: number) => dispatch(setUnfollowTC(userID))
  const profileHandler = (userID: number) => dispatch(setUserProfileTC(userID))

  return (
    <div key={user.id}>
                <span>
                  <div>
                    <NavLink to={`/profile/${user.id}`}>
                      <img src={!user.photos.small ? userAvatar : user.photos.small}
                           alt="user's avatar"
                           onClick={() => profileHandler(user.id)}
                      />
                    </NavLink>
                  </div>
                  <div>

                  </div>
                </span>{
      user.followed
        ? <button onClick={() => unfollow(user.id)}
                  disabled={followingInProgress.some(id => id === user.id)}>Unfollow</button>
        : <button onClick={() => follow(user.id)}
                  disabled={followingInProgress.some(id => id === user.id)}>Follow</button>
    }
      <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
      <span>
                  <div>{'user.location.country'}</div>
                  <div>{'user.location.city'}</div>
               </span>
    </div>
  )
}
type UserPT = {
  user: UserType
}