import { ResponseT, usersAPI } from 'components/Users/api/users-api'
import { AppThunk } from 'store/store'
import { Dispatch } from 'redux'
import { AxiosResponse } from 'axios'
import { updateObjectInArray } from 'utils/updateObjectInArray'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS'

const initialState = {
  users: [] as UserType[],
  pageSize: 5,
  portionSize: 20,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[],
}

export const usersReducer = (state: InitialStateT = initialState, action: ActionsType): InitialStateT => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users: updateObjectInArray(state.users, action.userID, 'id', { followed: true }),
      }
    case UNFOLLOW:
      return {
        ...state, users: updateObjectInArray(state.users, action.userID, 'id', { followed: false }),
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalItemsCount: action.totalItemsCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id !== action.userID),
      }

    default:
      return state
  }
}

// Actions
const setFollowAC = (userID: number) => ({ type: FOLLOW, userID } as const)
const setUnfollowAC = (userID: number) => ({ type: UNFOLLOW, userID } as const)
const setUsersAC = (users: UserType[]) => ({ type: SET_USERS, users } as const)
const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
const setTotalUsersCountAC = (totalItemsCount: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, totalItemsCount } as const)
const toggleIsFetchingAC = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const)
const toggleFollowingProgressAC = (isFetching: boolean, userID: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching, userID,
} as const)

// Thunks

const setFollowUnfollow = async (dispatch: Dispatch, userID: number, apiMethod: (userID: number) => Promise<AxiosResponse<ResponseT>>, actionCreator: typeof setFollowAC | typeof setUnfollowAC) => {
  dispatch(toggleFollowingProgressAC(true, userID))
  const res = await apiMethod(userID)
  if (res.data.resultCode === 0) {
    dispatch(actionCreator(userID))
  }
  dispatch(toggleFollowingProgressAC(false, userID))
}

export const setFollowTC = (userID: number): AppThunk => dispatch => {
  return setFollowUnfollow(dispatch, userID, usersAPI.setFollow, setFollowAC)
}

export const setUnfollowTC = (userID: number): AppThunk => dispatch => {
  return setFollowUnfollow(dispatch, userID, usersAPI.setUnfollow, setUnfollowAC)
}

export const setUsersTC = (page: number, pageSize: number): AppThunk => async dispatch => {
  dispatch(toggleIsFetchingAC(true))
  dispatch(setCurrentPageAC(page))
  const res = await usersAPI.getUsers(page, pageSize)
  dispatch(setUsersAC(res.data.items))
  dispatch(setTotalUsersCountAC(res.data.totalCount))
  dispatch(toggleIsFetchingAC(false))
}
export const setCurrentPageTC = (pageNumber: number, pageSize: number): AppThunk => async dispatch => {
  dispatch(toggleIsFetchingAC(true))
  dispatch(setCurrentPageAC(pageNumber))
  const res = await usersAPI.getUsers(pageNumber, pageSize)
  dispatch(setUsersAC(res.data.items))
  dispatch(toggleIsFetchingAC(false))
}

// Types
type InitialStateT = typeof initialState
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