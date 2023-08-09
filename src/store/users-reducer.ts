const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserLocation = {
  city: string
  country: string
}
export type UserType = {
  id: number
  userAvatar: string
  followed: boolean
  fullName: string
  status: string
  location: UserLocation
}

type InitialStateType = typeof initialState

type ActionsType = ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>

const initialState = {
  users: [] as UserType[],
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? { ...u, followed: true } : u),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? { ...u, followed: false } : u),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    default:
      return state
  }
}

export const followAC = (userID: number) => {
  return { type: FOLLOW, userID } as const
}
export const unfollowAC = (userID: number) => {
  return { type: UNFOLLOW, userID } as const
}
export const setUsersAC = (users: UserType[]) => {
  return { type: SET_USERS, users } as const
}