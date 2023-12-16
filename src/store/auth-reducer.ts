import { AppThunk } from 'store/store'
import { authAPI } from 'components/Auth/api/auth-api'
import { stopSubmit } from 'redux-form'
import { ResultCodes } from 'common/api/instance'

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
    case 'auth/SET-USER-DATA': {
      return {
        ...state,
        data: action.payload,
        isLoggedIn: action.isLoggedIn,
      }
    }
    case 'auth/SET-IS-LOGGED-IN': {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      }
    }
    case 'auth/GET-CAPTCHA-URL': {
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
  type: 'auth/SET-USER-DATA',
  payload,
  isLoggedIn,
} as const)
const setIsLoggedInAC = (isLoggedIn: boolean) => ({ type: 'auth/SET-IS-LOGGED-IN', isLoggedIn } as const)

const setCaptchaUrlAC = (captchaUrl: CaptchaT) => ({ type: 'auth/GET-CAPTCHA-URL', captchaUrl } as const)

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
  const resultCode = await authAPI.logout()
  if (resultCode === ResultCodes.Success) {
    dispatch(setAuthUserDataAC(initialState.data, false))
  }
}

export const getCaptchaUrlTC = (): AppThunk => async dispatch => {
  const url = await authAPI.getCaptchaUrl()
  dispatch(setCaptchaUrlAC(url))
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