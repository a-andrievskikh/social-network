import { AppThunk } from 'store/store'
import { v1 } from 'uuid'

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
    { id: v1(), message: 'Hi' },
    { id: v1(), message: 'How are you?' },
    { id: v1(), message: 'Yo' },
    { id: v1(), message: 'Yo' },
    { id: v1(), message: 'Yo' },
    { id: v1(), message: 'Yo' },
  ] as MessageType[],
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: v1(), message: action.message },
        ],
      }
    default:
      return state
  }
}

// Actions
const sendMessageAC = (message: string) => ({ type: SEND_MESSAGE, message } as const)

// Thunks
export const sendMessageTC = (message: string): AppThunk => async dispatch => dispatch(sendMessageAC(message))

// Types
export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: string
  message: string
}

type InitialStateType = typeof initialState

type ActionsType =
  | ReturnType<typeof sendMessageAC>