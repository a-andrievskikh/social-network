import s from 'components/Login/Login.module.css'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div className={s.loginBlock}>
      <NavLink to={'/login'}>LOGIN</NavLink>
    </div>
  )
}