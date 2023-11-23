import s from './Header.module.css'
import { Login } from 'components/Login/Login'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector, loginSelector } from 'components/Header/header-selectors'

export const Header = () => {
  const isLoggedIn = useAppSelector<boolean>(isLoggedInSelector)
  const login = useAppSelector<null | string>(loginSelector)

  console.log(login)
  return (
    <header className={s.header}>
      <img
        src="https://thumbnail.imgbin.com/19/19/19/imgbin-computer-icons-foursquare-graphics-psd-logo-health-center-FztfrBmPbLarS7qXyJyt7GX8z_t.jpg"
        alt=""
      />
      {isLoggedIn ? <div className={s.login}>Login: {login}</div> : <Login />}
    </header>
  )
}

