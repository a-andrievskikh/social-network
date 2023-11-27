import { ChangeEvent } from 'react'
import { sendMessageTC, updateNewMessageBodyTC } from 'store/dialogs-reducer'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { DialogType, MessageType } from 'store/dialogs-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'

export const Dialogs = () => {
  const dispatch = useAppDispatch()

  const dialogs = useAppSelector<DialogType[]>(state => state.dialogsPage.dialogs)
  const messages = useAppSelector<MessageType[]>(state => state.dialogsPage.messages)
  const newMessageBody = useAppSelector<string>(state => state.dialogsPage.newMessageBody)

  const dialogsElements = dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

  const messagesElements = messages
    .map((m, idx) => <Message key={m.id} id={m.id} message={m.message} idx={idx} />)

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageBodyTC(e.currentTarget.value))
  }

  const onSendMessageClickHandler = () => dispatch(sendMessageTC())

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