import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../store/store'
import { followAC, setUsersAC, unfollowAC, UserType } from '../../store/users-reducer'
import s from './Users.module.css'
import axios from 'axios'
import userAvatar from '../../assets/rick.jpg'
import { useEffect } from 'react'

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector<AppRootStateType, UserType[]>(state => state.usersPage.users)
  const follow = (userID: number) => dispatch(followAC(userID))
  const unfollow = (userID: number) => dispatch(unfollowAC(userID))

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => dispatch(setUsersAC(res.data.items)))
  }, [])

  return (
    <div className={s.avatar}>
      {
        users.map(u => {
            return (
              <div key={u.id}>
              <span>
                <div>
                  <img src={!u.photos.small ? userAvatar : u.photos.small} alt="user's avatar" />
                </div>
                <div>
                  {
                    u.followed
                      ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                      : <button onClick={() => follow(u.id)}>Follow</button>
                  }
                </div>
              </span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
               </span>
              </div>
            )
          },
        )
      }
    </div>
  )
}