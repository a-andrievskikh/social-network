import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { Redirect } from 'react-router-dom'
import { isLoggedInSelector } from 'components/Header/header-selectors'
import { dialogsSelector, messagesSelector } from 'components/Dialogs/dialogs-selectors'
import { AddMessageReduxForm, NewMessageBodyT } from 'components/Dialogs/AddMessageForm/AddMessageForm'
import { sendMessageTC } from 'store/dialogs-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'

export const Dialogs = () => {
  const dispatch = useAppDispatch()
  const dialogs = useAppSelector(dialogsSelector)
  const messages = useAppSelector(messagesSelector)
  const isLoggedIn = useAppSelector(isLoggedInSelector)

  const dialogsItems = dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)

  const messagesItems = messages
    .map((m, idx) => <Message key={m.id} id={m.id} message={m.message} idx={idx} />)

  const addNewMessageHandler = (value: NewMessageBodyT) => dispatch(sendMessageTC(value.newMessageBody))

  if (!isLoggedIn) return <Redirect to={'login'} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItems}</div>
      <div className={s.messagesItems}>{messagesItems}</div>
      <AddMessageReduxForm onSubmit={addNewMessageHandler} />
    </div>
  )
}

