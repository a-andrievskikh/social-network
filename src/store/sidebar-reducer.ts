const initialState = {}

export const sidebarReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SIDEBAR': {
      return 'sidebar'
    }
    default:
      return state
  }
}

// Actions
export const sidebarAC = () => ({ type: 'SIDEBAR' }) as const

// Types
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof sidebarAC>