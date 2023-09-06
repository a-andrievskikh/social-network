const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UsersDataType = {
  items: UserType[]
  totalCount: number
  error: string
}
export type UserType = {
  name: string
  id: number
  photos: {
    small: string | undefined
    large: string | undefined
  },
  status: string | undefined,
  followed: boolean
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

export const followAC = (userID: number) => ({ type: FOLLOW, userID } as const)
export const unfollowAC = (userID: number) => ({ type: UNFOLLOW, userID } as const)
export const setUsersAC = (users: UserType[]) => ({ type: SET_USERS, users } as const)