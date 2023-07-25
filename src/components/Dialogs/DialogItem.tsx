import React, { FC } from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type UsersType = {
  id: number
  name: string
}

type DialogItemPropsType = {
  id: number
  name: string,
}

type MessagePropsType = {
  id: number
  message: string
}

const dialogs: UsersType[] = [
  {id: 1, name: 'Dymich'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'},
]

const messages: MessagePropsType[] = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
]

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

const dialogsElements = dialogs
  .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

const messagesElements = messages
  .map(m => <Message key={m.id} id={m.id} message={m.message} />)

export const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      {dialogsElements}
    </div>
    <div className={s.messages}>
      {messagesElements}
    </div>
  </div>
)