const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

type InitialStateType = typeof initialState

const initialState = {
  users: [] as UserType[],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[],
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users: state.users.map(u => u.id === action.userID ? { ...u, followed: true } : u),
      }
    case UNFOLLOW:
      return {
        ...state, users: state.users.map(u => u.id === action.userID ? { ...u, followed: false } : u),
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id !== action.userID)
      }

    default:
      return state
  }
}
// Actions
export const setFollowAC = (userID: number) => ({ type: FOLLOW, userID } as const)
export const setUnfollowAC = (userID: number) => ({ type: UNFOLLOW, userID } as const)
export const setUsersAC = (users: UserType[]) => ({ type: SET_USERS, users } as const)
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const setTotalUsersCountAC = (totalUsersCount: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const)
export const toggleFollowingProgressAC = (isFetching: boolean, userID: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching, userID
} as const)

// Types
type ActionsType =
  | ReturnType<typeof setFollowAC>
  | ReturnType<typeof setUnfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleFollowingProgressAC>

export type UserType = {
  id: number
  name: string
  status: string | undefined,
  photos: {
    small: string | undefined
    large: string | undefined
  },
  followed: boolean
}