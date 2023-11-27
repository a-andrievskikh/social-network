const SET_USER_DATA = 'SET-USER-DATA'
const SET_IS_LOGGED_IN = 'SET-IS-LOGGED-IN'

const initialState = {
  userData: {
    id: null,
    email: null,
    login: null,
  },
  isLoggedIn: false,
}

export const authReducer = (state: InitialStateT = initialState, action: ActionsType): InitialStateT => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.userData,
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
export const setAuthUserDataAC = (userData: UserDataT) => ({ type: SET_USER_DATA, userData } as const)
export const setIsLoggedInAC = (isLoggedIn: boolean) => ({ type: SET_IS_LOGGED_IN, isLoggedIn } as const)

// Types
type ActionsType =
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setIsLoggedInAC>

type InitialStateT = {
  userData: UserDataT
  isLoggedIn: boolean
}

type UserDataT = {
  id: null | number
  email: null | string
  login: null | string
}