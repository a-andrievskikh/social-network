import React, { ChangeEvent, FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { sendMessageAC, updateNewMessageBodyAC } from '../../store/dialogs-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../store/store'
import { DialogType, MessageType } from '../../App'

export const Dialogs = () => {
  const dispatch = useDispatch()

  const dialogs = useSelector<AppRootStateType, DialogType[]>(state => state.dialogsPage.dialogs)
  const messages = useSelector<AppRootStateType, MessageType[]>(state => state.dialogsPage.messages)
  const newMessageBody = useSelector<AppRootStateType, string>(state => state.dialogsPage.newMessageBody)

  const dialogsElements = dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

  const messagesElements = messages
    .map((m, idx) => <Message key={m.id} id={m.id} message={m.message} idx={idx} />)

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageBodyAC(e.currentTarget.value))
  }

  const onSendMessageClickHandler = () => dispatch(sendMessageAC())

  return (
    (
      <div className={s.dialogs}>
        <div>
          {dialogsElements}
        </div>
        <div>
          <div>
            <div>{messagesElements}</div>
            <div>
              <textarea value={newMessageBody}
                        onChange={onChangeTextHandler}
                        placeholder={'Enter your message'}
              />
              <button onClick={onSendMessageClickHandler}>Send message</button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}