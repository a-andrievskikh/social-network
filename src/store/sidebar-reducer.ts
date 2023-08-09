export type SidebarType = {}

type InitialStateType = typeof initialState

export type ActionsType = ReturnType<typeof sidebarAC>

const initialState = {}

export const sidebarReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SIDEBAR': {
      return 'sidebar'
    }
    default:
      return state
  }
}

export const sidebarAC = () => {
  return { type: 'SIDEBAR' } as const
}