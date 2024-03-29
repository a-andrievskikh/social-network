import { AppThunk } from 'store/store'
import { profileAPI, ProfileType } from 'components/Profile/api/profile-api'
import { v1 } from 'uuid'
import { Photos, ResultCodes } from 'common/types/common-types'

const user1 = v1()
const user2 = v1()

const initialState = {
  posts: [
    { id: user1, message: 'Hi, how are you?', likesCount: 15 },
    { id: user2, message: `It's my first project.`, likesCount: 20 },
  ] as PostType[],
  profile: {} as ProfileType | null,
  aboutMe: '',
  statusText: '',
}

export const profileReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case 'profile/ADD-POST':
      return {
        ...state,
        posts: [
          { id: v1(), message: action.value, likesCount: 0 },
          ...state.posts,
        ],
      }
    case 'profile/DELETE-POST':
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.userID),
      }
    case 'profile/SET-USER-PROFILE':
      return { ...state, profile: action.profile }
    case 'profile/SET-USER-STATUS':
      return { ...state, statusText: action.statusText }
    
    default:
      return state
  }
}

// Actions
export const addPostAC = (value: string) => ({ type: 'profile/ADD-POST', value } as const)
export const deletePostAC = (userID: string) => ({ type: 'profile/DELETE-POST', userID } as const)
const setUserProfileAC = (profile: ProfileType) => ({ type: 'profile/SET-USER-PROFILE', profile } as const)
const setUserStatusAC = (statusText: string) => ({ type: 'profile/SET-USER-STATUS', statusText } as const)

// Thunks
export const addPostTC = (value: string): AppThunk => async dispatch => dispatch(addPostAC(value))
export const getUserProfileTC = (userID: number): AppThunk => async dispatch => {
  const data = await profileAPI.getProfile(userID)
  dispatch(setUserProfileAC(data))
}
export const getUserStatusTC = (userID: number): AppThunk => async dispatch => {
  const data = await profileAPI.getStatus(userID)
  dispatch(setUserStatusAC(data))
}
export const setUserStatusTC = (statusText: string): AppThunk => async dispatch => {
  const data = await profileAPI.updateStatus(statusText)
  if (data.resultCode === ResultCodes.Success) {
    dispatch(setUserStatusAC(statusText))
  }
}

//Types
export type InitialState = typeof initialState

type Actions =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setUserStatusAC>

export type PostType = {
  id: string
  message: string
  likesCount: number
}

