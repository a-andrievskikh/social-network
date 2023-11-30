import { AppThunk } from 'store/store'
import { authAPI } from 'components/Auth/auth-api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET-USER-DATA'
const SET_IS_LOGGED_IN = 'SET-IS-LOGGED-IN'

const initialState = {
  data: {
    id: null,
    email: null,
    login: null,
  } as UserDataT,
  isLoggedIn: false,
}

export const authReducer = (state: InitialStateT = initialState, action: ActionsType): InitialStateT => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        data: action.payload,
        isLoggedIn: action.isLoggedIn,
      }
    }
    case SET_IS_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      }
    }
    default: {
      return state
    }
  }
}

// Actions
const setAuthUserDataAC = (payload: UserDataT, isLoggedIn: boolean) => ({
  type: SET_USER_DATA,
  payload,
  isLoggedIn,
} as const)
const setIsLoggedInAC = (isLoggedIn: boolean) => ({ type: SET_IS_LOGGED_IN, isLoggedIn } as const)

// Thunks
export const getAuthUserDataTC = (): AppThunk => async dispatch => {
  const res = await authAPI.me()
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(res.data.data, true))
  }
}

export const loginTC = (login: LoginT): AppThunk => async dispatch => {
  const res = await authAPI.login(login)
  if (res.data.resultCode === 0) {
    dispatch(getAuthUserDataTC())
  } else {
    let message = res.data.messages.length ? res.data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logoutTC = (): AppThunk => async dispatch => {
  const res = await authAPI.logout()
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(initialState.data, false))
  }
}

// Types
type ActionsType =
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setIsLoggedInAC>

type InitialStateT = typeof initialState

type UserDataT = {
  id: null | number
  email: null | string
  login: null | string
}

export type LoginT = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: boolean
}