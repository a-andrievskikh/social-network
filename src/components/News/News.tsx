import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector } from 'components/Header/header-selectors'
import { Redirect } from 'react-router-dom'

export const News = () => {

  const isLoggedIn = useAppSelector<boolean>(isLoggedInSelector)
  if (!isLoggedIn) return <Redirect to={'/login'} />

  return (
    <div>
      News
    </div>
  )
}