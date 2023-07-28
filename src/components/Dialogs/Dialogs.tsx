import React, { ChangeEvent, FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { ActionsType, DialogsPageType, sendMessageAC, updateNewMessageBodyAC } from '../../redux/store'

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  dispatch: (action: ActionsType) => void
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
  const messagesElements = props.dialogsPage.messages
    .map((m, idx) => <Message key={m.id} id={m.id} message={m.message} idx={idx} />)
  const newMessageBody = props.dialogsPage.newMessageBody

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const action = updateNewMessageBodyAC(e.currentTarget.value)
    props.dispatch(action)
  }

  const onSendMessageClickHandler = () => props.dispatch(sendMessageAC())

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