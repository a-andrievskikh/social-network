import rick from '../assets/images/rick.jpg'
import { AppThunk } from 'store/store'
import { profileAPI } from 'components/Profile/api/profile-api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first project.', likesCount: 20 },
  ] as PostType[],
  newPostText: 'Hey!',
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
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          { id: 3, message: state.newPostText, likesCount: 0 },
          ...state.posts,
        ],
        newPostText: '',
      }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state
  }
}

// Actions
const addPostAC = () => ({ type: ADD_POST } as const)
const updateNewPostTextAC = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText } as const)
const setUserProfileAC = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const)

// Thunks
export const addPostTC = (): AppThunk => async dispatch => dispatch(addPostAC())
export const updateNewPostTextTC = (newText: string): AppThunk => async dispatch => dispatch(updateNewPostTextAC(newText))

export const setUserProfileTC = (userID: number): AppThunk => async dispatch => {
  const res = await profileAPI.getProfile(userID)
  dispatch(setUserProfileAC(res.data))
}

//Types
type InitialStateType = typeof initialState

type ActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof setUserProfileAC>

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type NewPostTextType = string
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