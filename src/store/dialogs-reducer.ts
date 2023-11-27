import { AppThunk } from 'store/store'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
  dialogs: [
    { id: 1, name: 'Dymich' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ] as DialogType[],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
    { id: 6, message: 'Yo' },
  ] as MessageType[],
  newMessageBody: '',
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
          { id: 6, message: state.newMessageBody },
        ],
      }
    default:
      return state
  }
}

// Actions
const updateNewMessageBodyAC = (newMessage: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: newMessage } as const)
const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)

// Thunks
export const updateNewMessageBodyTC = (newMessage: string): AppThunk => async dispatch => dispatch(updateNewMessageBodyAC(newMessage))
export const sendMessageTC = (): AppThunk => async dispatch => dispatch(sendMessageAC())

// Types
export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}

type InitialStateType = typeof initialState

type ActionsType =
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof sendMessageAC>