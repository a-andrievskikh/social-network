import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from 'store/store'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC,
  UserType,
} from 'store/users-reducer'
import s from './Users.module.css'
import axios from 'axios'
import userAvatar from 'assets/images/rick.jpg'
import { useEffect } from 'react'
import { Preloader } from 'components/common/preloader/Preloader'

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector<AppRootStateType, UserType[]>(state => state.usersPage.users)
  const pageSize = useSelector<AppRootStateType, number>(state => state.usersPage.pageSize)
  const totalUsersCount = useSelector<AppRootStateType, number>(state => state.usersPage.totalUsersCount)
  const currentPage = useSelector<AppRootStateType, number>(state => state.usersPage.currentPage)
  const isFetching = useSelector<AppRootStateType, boolean>(state => state.usersPage.isFetching)
  const follow = (userID: number) => dispatch(followAC(userID))
  const unfollow = (userID: number) => dispatch(unfollowAC(userID))

  useEffect(() => {
    dispatch(toggleIsFetchingAC(true))
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        dispatch(setUsersAC(res.data.items))
        dispatch(setTotalUsersCountAC(res.data.totalCount))
        dispatch(toggleIsFetchingAC(false))
      })
  }, [])

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  console.log('users rendered')
  console.log(currentPage)

  const onPageHandler = (pageNumber: number) => {
    dispatch(setCurrentPageAC(pageNumber))
    dispatch(toggleIsFetchingAC(true))
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
      .then(res => {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(res.data.items))
      })

  }

  return (
    <div className={s.avatar}>
      <div>
        {
          pages.map((p, i) => <span
            key={i}
            className={currentPage === p ? s.selectedPage : s.pages}
            onClick={() => onPageHandler(p)}
          >{p}</span>)
        }
      </div>
      {isFetching && <Preloader />}
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

