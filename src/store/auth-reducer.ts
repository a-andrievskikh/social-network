import { AppThunk } from 'store/store'
import { authAPI } from 'components/Auth/auth-api'

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
        data: action.userData,
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
const getAuthUserDataAC = (userData: UserDataT) => ({ type: SET_USER_DATA, userData } as const)
const setIsLoggedInAC = (isLoggedIn: boolean) => ({ type: SET_IS_LOGGED_IN, isLoggedIn } as const)

// Thunks
export const getAuthUserDataTC = (): AppThunk => async dispatch => {
  const res = await authAPI.me()
  if (res.data.resultCode === 0) {
    dispatch(setIsLoggedInTC(true))
    dispatch(getAuthUserDataAC(res.data.data))
  }
}
export const setIsLoggedInTC = (isLoggedIn: boolean): AppThunk => async dispatch => dispatch(setIsLoggedInAC(isLoggedIn))

// Types
type ActionsType =
  | ReturnType<typeof getAuthUserDataAC>
  | ReturnType<typeof setIsLoggedInAC>

type InitialStateT = typeof initialState

type UserDataT = {
  id: null | number
  email: null | string
  login: null | string
}