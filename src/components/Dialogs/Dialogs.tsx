import React from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'

type DialogsType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

const dialogs: DialogsType[] = [
  {id: 1, name: 'Dymich'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'},
]

const messages: MessageType[] = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
]

const dialogsElements = dialogs
  .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

const messagesElements = messages
  .map(m => <Message key={m.id} id={m.id} message={m.message} />)

export const Dialogs = () => {
  return (
    (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
    )
  )
}