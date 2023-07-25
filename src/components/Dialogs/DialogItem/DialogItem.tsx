import React, { FC } from 'react'
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

type DialogItemPropsType = {
  id: number
  name: string,
}

export const DialogItem: FC<DialogItemPropsType> = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <div className={`${s.dialog} ${s.active} ${s.avatar}`}>
      <NavLink to={path}>
        <img
          src="https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1"
          alt=""
        />
      </NavLink>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}