import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../store/store'
import { followAC, setUsersAC, unfollowAC, UserType } from '../../store/users-reducer'
import s from './users.module.css'

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector<AppRootStateType, UserType[]>(state => state.usersPage.users)

  const follow = (userID: number) => dispatch(followAC(userID))
  const unfollow = (userID: number) => dispatch(unfollowAC(userID))

  if (users.length === 0) {
    dispatch(setUsersAC([
      {
        id: 1,
        userAvatar: 'https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1',
        followed: false,
        fullName: 'Mike',
        status: 'Hey',
        location: { city: 'NY', country: 'USA' },
      },
      {
        id: 2,
        userAvatar: 'https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1',
        followed: true,
        fullName: 'John',
        status: 'Hey',
        location: { city: 'LA', country: 'USA' },
      },
      {
        id: 3,
        userAvatar: 'https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1',
        followed: false,
        fullName: 'Ann',
        status: 'Hey',
        location: { city: 'NY', country: 'USA' },
      },
      {
        id: 4,
        userAvatar: 'https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1',
        followed: false,
        fullName: 'Sarah',
        status: 'Hey',
        location: { city: 'LA', country: 'USA' },
      },
    ]))
  }

  return (
    <div className={s.avatar}>
      {
        users.map(u => {
            return (
              <div key={u.id}>
              <span>
                <div>
                  <img src={u.userAvatar} alt="" />
                </div>
                <div>
                  {
                    u.followed
                      ? <button onClick={() => unfollow(u.id)}>UNFOLLOW</button>
                      : <button onClick={() => follow(u.id)}>FOLLOW</button>
                  }
                </div>
              </span>
                <span>
                <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
                </span>
               </span>
                <span>
                <div>
                  {u.location.country}
                </div>
                <div>
                  {u.location.city}
                </div>
              </span>
              </div>
            )
          },
        )
      }
    </div>
  )
}