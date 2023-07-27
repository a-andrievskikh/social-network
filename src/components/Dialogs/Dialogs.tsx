import React, { FC, useRef } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { DialogsPageType } from '../../redux/state'

type DialogsPropsType = {
  dialogsPage: DialogsPageType
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

  const messagesElements = props.dialogsPage.messages
    .map((m, idx) => <Message key={m.id} id={m.id} message={m.message} idx={idx} />)


  const addMessageElement = useRef<HTMLTextAreaElement>(null)
  const handleAddMessageClick = () => alert(addMessageElement.current?.value)

  return (
    (
      <div className={s.dialogs}>
        <div>
          {dialogsElements}
        </div>
        <div>
          {messagesElements}
        </div>
        <div>
          <textarea ref={addMessageElement} />
          <button onClick={handleAddMessageClick}>Add message</button>
        </div>
      </div>
    )
  )
}