import React, { FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { DialogsType, MessageType } from '../../App'

type DialogsPropsType = {
  dialogs: DialogsType[]
  messages: MessageType[]
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

  const messagesElements = props.messages
    .map(m => <Message key={m.id} id={m.id} message={m.message} />)

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