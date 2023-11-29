import rick from '../assets/images/rick.jpg'
import { AppThunk } from 'store/store'
import { profileAPI } from 'components/Profile/api/profile-api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: `It's my first project.`, likesCount: 20 },
  ] as PostType[],
  profile: {
    aboutMe: 'Initial Profile',
    contacts: {
      facebook: '',
      website: null,
      vk: '',
      twitter: '',
      instagram: '',
      youtube: null,
      github: 'github.com',
      mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: '',
    fullName: 'samurai dimych',
    userId: 1,
    photos: {
      small: rick,
      large: rick,
    },
  } as ProfileType,
  statusText: 'Initial Status',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          { id: 3, message: action.value, likesCount: 0 },
          ...state.posts,
        ],
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
const addPostAC = (value: string) => ({ type: ADD_POST, value } as const)
const setUserProfileAC = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const)
const setUserStatusAC = (statusText: string) => ({ type: SET_USER_STATUS, statusText } as const)

// Thunks
export const addPostTC = (value: string): AppThunk => async dispatch => dispatch(addPostAC(value))
export const setUserProfileTC = (userID: number): AppThunk => async dispatch => {
  const res = await profileAPI.getProfile(userID)
  dispatch(setUserProfileAC(res.data))
}
export const getUserStatusTC = (userID: number): AppThunk => async dispatch => {
  debugger
  const res = await profileAPI.getStatus(userID)
  dispatch(setUserStatusAC(res.statusText))
}
export const setUserStatusTC = (statusText: string): AppThunk => async dispatch => {
  const res = await profileAPI.updateStatus(statusText)
  if (res.data.resultCode === 0) {
    dispatch(setUserStatusAC(statusText))
  }
}

//Types
type InitialStateType = typeof initialState

type ActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setUserStatusAC>

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ProfileType = {
  aboutMe: string
  contacts: Contacts,
  lookingForAJob: boolean,
  lookingForAJobDescription: string
  fullName: string
  userId: number,
  photos: Photos
}

export type Contacts = {
  facebook: string
  website: null,
  vk: string
  twitter: string
  instagram: string
  youtube: null,
  github: string
  mainLink: null
}

export type Photos = {
  small: string
  large: string
}