import React, { FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { DialogsPageType } from '../../redux/state'

type DialogsPropsType = {
  state: DialogsPageType
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.state.dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

  const messagesElements = props.state.messages
    .map((m, idx) => <Message key={m.id} id={m.id} message={m.message} idx={idx} />)

  return (
    (
      <div className={s.dialogs}>
        <div>
          {dialogsElements}
        </div>
        <div>
          {messagesElements}
        </div>
      </div>
    )
  )
}