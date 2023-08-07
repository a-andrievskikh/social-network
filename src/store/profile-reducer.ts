import { ProfilePageType } from '../App'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

const initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first project.', likesCount: 20},
  ],
  newPostText: 'Hey!',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          {id: 3, message: state.newPostText, likesCount: 0},
          ...state.posts,
        ],
        newPostText: '',
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state
  }
}
export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string) =>
  ({type: UPDATE_NEW_POST_TEXT, newText} as const)
