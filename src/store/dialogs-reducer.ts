import { DialogsPageType } from '../App'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type ActionsType =
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof sendMessageAC>

const initialState: DialogsPageType = {
  dialogs: [
    {id: 1, name: 'Dymich'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
  ],
  newMessageBody: '',
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      }
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageBody: '',
        messages: [
          ...state.messages,
          {id: 6, message: state.newMessageBody},
        ],
      }
    default:
      return state
  }
}

export const updateNewMessageBodyAC = (newMessage: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: newMessage} as const)
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)