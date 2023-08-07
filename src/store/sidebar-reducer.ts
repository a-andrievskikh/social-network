import { SidebarType } from '../App'

export type ActionsType = ReturnType<typeof sidebarAC>

const initialState: SidebarType = {}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType): SidebarType => {
  switch (action.type) {
    case 'SIDEBAR': {
      return 'sidebar'
    }
    default:
      return state
  }
}

export const sidebarAC = () => {
  return {type: 'SIDEBAR'} as const
}