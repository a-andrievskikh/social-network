import s from './Header.module.css'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector, loginSelector } from 'components/Header/header-selectors'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const isLoggedIn = useAppSelector<boolean>(isLoggedInSelector)
  const login = useAppSelector<null | string>(loginSelector)

  // console.log(login)

  return (
    <header className={s.header}>
      <div>
        <img
          src="https://thumbnail.imgbin.com/19/19/19/imgbin-computer-icons-foursquare-graphics-psd-logo-health-center-FztfrBmPbLarS7qXyJyt7GX8z_t.jpg"
          alt=""
        />
      </div>
      <div>
        {isLoggedIn ? login :
          <NavLink to="/login"
                   activeClassName={s.login}>LOGIN
          </NavLink>}
      </div>
    </header>
  )
}

