import rick from '../assets/images/rick.jpg'
import { AppThunk } from 'store/store'
import { profileAPI } from 'components/Profile/api/profile-api'
import { v1 } from 'uuid'
import { CommonTypes } from 'common/types/commonTypes'

const ADD_POST = 'profile/ADD-POST'
const DELETE_POST = 'profile/DELETE-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'profile/SET-USER-STATUS'

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

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          { id: v1(), message: action.value, likesCount: 0 },
          ...state.posts,
        ],
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.userID),
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_USER_STATUS:
      return { ...state, statusText: action.statusText }

    default:
      return state
  }
}

// Actions
export const addPostAC = (value: string) => ({ type: ADD_POST, value } as const)
export const deletePostAC = (userID: string) => ({ type: DELETE_POST, userID } as const)
const setUserProfileAC = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const)
const setUserStatusAC = (statusText: string) => ({ type: SET_USER_STATUS, statusText } as const)

// Thunks
export const addPostTC = (value: string): AppThunk => async dispatch => dispatch(addPostAC(value))
export const setUserProfileTC = (userID: number): AppThunk => async dispatch => {
  const res = await profileAPI.getProfile(userID)
  dispatch(setUserProfileAC(res.data))
}
export const getUserStatusTC = (userID: number): AppThunk => async dispatch => {
  const res = await profileAPI.getStatus(userID)
  dispatch(setUserStatusAC(res.data))
}
export const setUserStatusTC = (statusText: string): AppThunk => async dispatch => {
  const res = await profileAPI.updateStatus(statusText)
  if (res.data.resultCode === 0) {
    dispatch(setUserStatusAC(statusText))
  }
}

//Types
export type InitialStateType = typeof initialState

type ActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setUserStatusAC>

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type ProfileType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string
  fullName: string
  contacts: Contacts,
  photos: CommonTypes
}

export type Contacts = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}
