import { UserData, usersAPI } from 'components/Users/api/users-api'
import { AppThunk } from 'store/store'
import { Dispatch } from 'redux'
import { AxiosResponse } from 'axios'
import { updateObjectInArray } from 'utils/updateObjectInArray'
import { Response, ResultCodes } from 'common/types/commonTypes'

const initialState = {
  users: [] as UserData[],
  pageSize: 5,
  portionSize: 20,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[], // array of users ids
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateT => {
  switch (action.type) {
    case 'users/FOLLOW':
      return {
        ...state, users: updateObjectInArray(state.users, action.userID, 'id', { followed: true }),
      }
    case 'users/UNFOLLOW':
      return {
        ...state, users: updateObjectInArray(state.users, action.userID, 'id', { followed: false }),
      }
    case 'users/SET-USERS':
      return { ...state, users: action.users }
    case 'users/SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage }
    case 'users/SET-TOTAL-USERS-COUNT':
      return { ...state, totalItemsCount: action.totalItemsCount }
    case 'users/TOGGLE-IS-FETCHING':
      return { ...state, isFetching: action.isFetching }
    case 'users/TOGGLE-IS-FOLLOWING-PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id !== action.userID),
      }
    
    default:
      return state
  }
}

// Actions
const setFollowAC = (userID: number) => <const>{ type: 'users/FOLLOW', userID } // another option for create action creator <const>
const setUnfollowAC = (userID: number) => <const>{ type: 'users/UNFOLLOW', userID }
const setUsersAC = (users: UserData[]) => ({ type: 'users/SET-USERS', users } as const)
const setCurrentPageAC = (currentPage: number) => ({ type: 'users/SET-CURRENT-PAGE', currentPage } as const)
const setTotalUsersCountAC = (totalItemsCount: number) =>
  ({ type: 'users/SET-TOTAL-USERS-COUNT', totalItemsCount } as const)
const toggleIsFetchingAC = (isFetching: boolean) => ({ type: 'users/TOGGLE-IS-FETCHING', isFetching } as const)
const toggleFollowingProgressAC = (isFetching: boolean, userID: number) => ({
  type: 'users/TOGGLE-IS-FOLLOWING-PROGRESS',
  isFetching, userID,
} as const)

// Thunks

const setFollowUnfollow = async (dispatch: Dispatch, userID: number, apiMethod: (userID: number) =>
  Promise<AxiosResponse<Response>>, actionCreator: typeof setFollowAC | typeof setUnfollowAC) => {
  dispatch(toggleFollowingProgressAC(true, userID))
  const res = await apiMethod(userID)
  if (res.data.resultCode === ResultCodes.Success) {
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
  const data = await usersAPI.getUsers(page, pageSize)
  dispatch(setUsersAC(data.items))
  dispatch(setTotalUsersCountAC(data.totalCount))
  dispatch(toggleIsFetchingAC(false))
}
export const setCurrentPageTC = (pageNumber: number, pageSize: number): AppThunk => async dispatch => {
  dispatch(toggleIsFetchingAC(true))
  dispatch(setCurrentPageAC(pageNumber))
  const data = await usersAPI.getUsers(pageNumber, pageSize)
  dispatch(setUsersAC(data.items))
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
