import { AppThunk } from 'store/store'
import { getAuthUserDataTC } from 'store/auth-reducer'

const initialState = {
  isAppInitialized: false,
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateT => {
  switch (action.type) {
    case 'app/SET-IS-INITIALIZED': {
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
const setIsInitializedAC = () => ({ type: 'app/SET-IS-INITIALIZED' } as const)

// Thunks
export const initializeAppTC = (): AppThunk => async dispatch => {
  await Promise.all([dispatch(getAuthUserDataTC()), dispatch(setIsInitializedAC())])
}

// Types
type InitialStateT = typeof initialState
type ActionsType = ReturnType<typeof setIsInitializedAC>
