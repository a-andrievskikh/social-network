import {
  setFollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  setUnfollowAC,
  UserType,
} from 'store/users-reducer'
import s from './Users.module.css'
import userAvatar from 'assets/images/rick.jpg'
import { useEffect } from 'react'
import { Preloader } from 'common/preloader/Preloader'
import { NavLink } from 'react-router-dom'
import { setUserProfileAC } from 'store/profile-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import {
  currentPageSelector, isFetchingSelector,
  pageSizeSelector,
  totalUsersCountSelector,
  usersSelector,
} from 'components/Users/users-selectors'
import { usersAPI } from 'components/Users/api/users-api'
import { profileAPI } from 'components/Profile/api/profile-api'

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector<UserType[]>(usersSelector)
  const pageSize = useAppSelector<number>(pageSizeSelector)
  const totalUsersCount = useAppSelector<number>(totalUsersCountSelector)
  const currentPage = useAppSelector<number>(currentPageSelector)
  const isFetching = useAppSelector<boolean>(isFetchingSelector)

  const follow = async (userID: number) => {
    const res = await usersAPI.setFollow(userID)
    if (res.data.resultCode === 0) dispatch(setFollowAC(userID))
  }
  const unfollow = async (userID: number) => {
    const res = await usersAPI.setUnfollow(userID)
    if (res.data.resultCode === 0) dispatch(setUnfollowAC(userID))
  }

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  useEffect(() => {
    (async () => {
      dispatch(toggleIsFetchingAC(true))
      const res = await usersAPI.getUsers(currentPage, pageSize)
      dispatch(setUsersAC(res.data.items))
      dispatch(setTotalUsersCountAC(res.data.totalCount))
      dispatch(toggleIsFetchingAC(false))
    })()
  }, [])

  const onChangePageHandler = async (pageNumber: number) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(pageNumber))
    const res = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsersAC(res.data.items))
    dispatch(toggleIsFetchingAC(false))
  }

  const onProfileHandler = async (userID: number) => {
    dispatch(toggleIsFetchingAC(true))
    const res = await profileAPI.getProfile(userID)
    dispatch(setUserProfileAC(res.data))
    dispatch(toggleIsFetchingAC(false))
  }

  // console.log('users rendered')
  return (
    <div className={s.avatar}>
      <div>
        {
          pages.map((p, i) => <span
            key={i}
            className={currentPage === p ? s.selectedPage : s.pages}
            onClick={() => onChangePageHandler(p)}
          >{p}
          </span>)
        }
      </div>
      {isFetching && <Preloader />}
      {
        users.map(u => {
            return (
              <div key={u.id}>
              <span>
                <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img src={!u.photos.small ? userAvatar : u.photos.small}
                       alt="user's avatar"
                       onClick={() => onProfileHandler(u.id)}
                  />
                </NavLink>
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

