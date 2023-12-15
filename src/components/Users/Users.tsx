import { setUsersTC } from 'store/users-reducer'
import s from './Users.module.css'
import { useEffect } from 'react'
import { Preloader } from 'common/preloader/Preloader'
import { Redirect } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import {
  currentPageSelector,
  isFetchingSelector,
  pageSizeSelector,
  usersSelector,
} from 'components/Users/users-selectors'
import { isLoggedInSelector } from 'components/Header/header-selectors'
import { User } from 'components/Users/User'
import { Pagination } from 'common/components/Pagination/Pagination'

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(usersSelector)
  const pageSize = useAppSelector(pageSizeSelector)
  const currentPage = useAppSelector(currentPageSelector)
  const isFetching = useAppSelector(isFetchingSelector)
  const isLoggedIn = useAppSelector(isLoggedInSelector)

  useEffect(() =>
    dispatch(setUsersTC(currentPage, pageSize)), [dispatch, currentPage, pageSize])

  if (!isLoggedIn) return <Redirect to={'/login'} />
  // console.log('users rendered')

  return (
    <div className={s.avatar}>
      {<Pagination />}
      {isFetching && <Preloader />}
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

