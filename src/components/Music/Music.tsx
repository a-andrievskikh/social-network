import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector } from 'components/Header/header-selectors'
import { Navigate } from 'react-router-dom'

export const Music = () => {
  
  const isLoggedIn = useAppSelector<boolean>(isLoggedInSelector)
  if (!isLoggedIn) return <Navigate to={'/login'} />
  
  return (
    <div>
      Music
    </div>
  )
}