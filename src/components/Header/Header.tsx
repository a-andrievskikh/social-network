import s from './Header.module.css'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector, loginSelector } from 'components/Header/header-selectors'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { logoutTC } from 'store/auth-reducer'
import projectLogo from '../../assets/images/sn-logo.png'

export const Header = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(isLoggedInSelector)
  const login = useAppSelector(loginSelector)
  
  const onLogoutHandler = () => dispatch(logoutTC())
  
  const loginLogoutBtn = () => {
    return isLoggedIn ?
      (<div>{login} -
        <button onClick={onLogoutHandler}>LOGOUT</button>
      </div>)
      :
      (<NavLink to="/login" className={s.login}>
        <div>
          <button>LOGIN</button>
        </div>
      </NavLink>)
  }
  
  return (
    <header className={s.header}>
      <div>
        <img className={s.logo}
             src={projectLogo}
             alt=""
        />
      </div>
      <div>{loginLogoutBtn()}</div>
    </header>
  )
}

