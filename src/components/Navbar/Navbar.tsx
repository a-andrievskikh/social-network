import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
  const active = ({ isActive }: any) => isActive ? `${s.active}` : ''
  
  return (
    <nav className={s.nav}>
      <ul className={`${s.item}`}>
        <li><NavLink to="/profile" className={active}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={active}>Messages</NavLink></li>
        <li><NavLink to="/users" className={active}>Users</NavLink></li>
        <li><NavLink to="/news" className={active}>News</NavLink></li>
        <li><NavLink to="/music" className={active}>Music</NavLink></li>
        <li><NavLink to="/settings" className={active}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}