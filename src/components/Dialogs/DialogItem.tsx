import React, { FC } from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type UsersType = {
  id: number
  name: string
}

const users: UsersType[] = [
  {id: 1, name: 'Dymich'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'},
]

type DialogItemPropsType = {
  name: string,
  id: string
}

type MessagePropsType = {
  message: string
}

const Message: FC<MessagePropsType> = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const DialogItem: FC<DialogItemPropsType> = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <DialogItem name="Dimych" id="1" />
      <DialogItem name="Andrey" id="2" />
      <DialogItem name="Sveta" id="3" />
      <DialogItem name="Sasha" id="4" />
      <DialogItem name="Viktor" id="5" />
      <DialogItem name="Valera" id="6" />
    </div>
    <div className={s.messages}>
      <Message message="Hi" />
      <Message message="How are you?" />
      <Message message="Yo" />
      <Message message="Yo" />
      <Message message="Yo" />
    </div>
  </div>
)