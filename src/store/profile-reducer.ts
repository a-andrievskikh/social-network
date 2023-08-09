const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type NewPostTextType = string

type InitialStateType = typeof initialState

type ActionsType = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first project.', likesCount: 20 },
  ] as PostType[],
  newPostText: 'Hey!',
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
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state
  }
}

export const addPostAC = () => ({ type: ADD_POST } as const)
export const updateNewPostTextAC = (newText: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText } as const)
