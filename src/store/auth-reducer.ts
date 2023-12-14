import { AppThunk } from 'store/store'
import { authAPI } from 'components/Auth/api/auth-api'
import { stopSubmit } from 'redux-form'
import { ResultCodes } from 'common/types/commonTypes'

const SET_USER_DATA = 'auth/SET-USER-DATA'
const SET_IS_LOGGED_IN = 'auth/SET-IS-LOGGED-IN'
const GET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL'

const initialState = {
  data: {
    id: null,
    email: null,
    login: null,
  } as UserDataT,
  isLoggedIn: false,
  captchaUrl: null as CaptchaT,
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateT => {
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
    case GET_CAPTCHA_URL: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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

const setCaptchaUrlAC = (captchaUrl: CaptchaT) => ({ type: GET_CAPTCHA_URL, captchaUrl } as const)


// Thunks
export const getAuthUserDataTC = (): AppThunk => async dispatch => {
  const meData = await authAPI.me()
  if (meData.resultCode === ResultCodes.Success) {
    dispatch(setAuthUserDataAC(meData.data, true))
  }
}

export const loginTC = (login: LoginT): AppThunk => async dispatch => {
  const loginData = await authAPI.login(login)
  if (loginData.resultCode === ResultCodes.Success) {
    dispatch(getAuthUserDataTC())
  } else {
    if (loginData.resultCode === ResultCodes.Captcha) dispatch(getCaptchaUrlTC())
    const message = loginData.messages.length ? loginData.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logoutTC = (): AppThunk => async dispatch => {
  const logoutData = await authAPI.logout()
  if (logoutData.resultCode === ResultCodes.Success) {
    dispatch(setAuthUserDataAC(initialState.data, false))
  }
}

export const getCaptchaUrlTC = (): AppThunk => async dispatch => {
  const res = await authAPI.getCaptchaUrl()
  dispatch(setCaptchaUrlAC(res.data.url))
}

// Types
type ActionsType =
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setIsLoggedInAC>
  | ReturnType<typeof setCaptchaUrlAC>

type InitialStateT = typeof initialState

type UserDataT = {
  id: number | null
  email: string | null
  login: string | null
}

export type LoginT = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: CaptchaT
}

export type CaptchaT = string | null