import { ActionsType, DialogsPageType } from './store'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
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