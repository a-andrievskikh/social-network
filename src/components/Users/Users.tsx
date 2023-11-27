import { setCurrentPageTC, setFollowTC, setUnfollowTC, setUsersTC, UserType } from 'store/users-reducer'
import s from './Users.module.css'
import userAvatar from 'assets/images/rick.jpg'
import { useEffect } from 'react'
import { Preloader } from 'common/preloader/Preloader'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import {
  currentPageSelector,
  followingInProgressSelector,
  isFetchingSelector,
  pageSizeSelector,
  totalUsersCountSelector,
  usersSelector,
} from 'components/Users/users-selectors'
import { setUserProfileTC } from 'store/profile-reducer'

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector<UserType[]>(usersSelector)
  const pageSize = useAppSelector<number>(pageSizeSelector)
  const totalUsersCount = useAppSelector<number>(totalUsersCountSelector)
  const currentPage = useAppSelector<number>(currentPageSelector)
  const isFetching = useAppSelector<boolean>(isFetchingSelector)
  const followingInProgress = useAppSelector<number[]>(followingInProgressSelector)

  const follow = async (userID: number) => dispatch(setFollowTC(userID))
  const unfollow = async (userID: number) => dispatch(setUnfollowTC(userID))

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  useEffect(() =>
    dispatch(setUsersTC(currentPage, pageSize)), [])

  const pageHandler = (pageNumber: number) =>
    dispatch(setCurrentPageTC(pageNumber, pageSize))

  const profileHandler = (userID: number) =>
    dispatch(setUserProfileTC(userID))

  // console.log('users rendered')

  return (
    <div className={s.avatar}>
      <div>
        {
          pages.map((p, i) => <span
            key={i}
            className={currentPage === p ? s.selectedPage : s.pages}
            onClick={() => pageHandler(p)}
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
                           onClick={() => profileHandler(u.id)}
                      />
                    </NavLink>
                  </div>
                  <div>

                  </div>
                </span>{
                u.followed
                  ? <button onClick={() => unfollow(u.id)}
                            disabled={followingInProgress.some(id => id === u.id)}>Unfollow</button>
                  : <button onClick={() => follow(u.id)}
                            disabled={followingInProgress.some(id => id === u.id)}>Follow</button>
              }
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

