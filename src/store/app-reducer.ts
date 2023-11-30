import { AppThunk } from 'store/store'
import { getAuthUserDataTC } from 'store/auth-reducer'

const SET_IS_INITIALIZED = 'SET-IS-INITIALIZED'

const initialState = {
  isAppInitialized: false,
}

export const appReducer = (state: InitialStateT = initialState, action: ActionsType): InitialStateT => {
  switch (action.type) {
    case SET_IS_INITIALIZED: {
      return {
        ...state,
        isAppInitialized: true,
      }
    }
    default: {
      return state
    }
  }
}

// Actions
const setIsInitializedAC = () => ({ type: SET_IS_INITIALIZED } as const)

// Thunks
export const initializeAppTC = (): AppThunk => async dispatch => {
  await Promise.all([dispatch(getAuthUserDataTC()), dispatch(setIsInitializedAC())])
}

// Types
type ActionsType =
  | ReturnType<typeof setIsInitializedAC>

type InitialStateT = typeof initialState