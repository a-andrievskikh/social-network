import { ActionsType, ProfilePageType } from './store'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
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
