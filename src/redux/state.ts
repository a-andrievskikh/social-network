const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}
export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type NewPostTextType = string
export type ProfilePageType = {
  posts: PostType[]
  newPostText: NewPostTextType
}
export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageBody: string
}
type SidebarType = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

export type StoreType = {
  _state: RootStateType,
  _callSubscriber: () => void
  dispatch: (action: ActionsType) => void
  getState: () => RootStateType
  subscribe: (observer: () => void) => void
}

export type ActionsType = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof sendMessageAC>

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first project.', likesCount: 20},
      ],
      newPostText: 'Hey!',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dymich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST: {
        this._state.profilePage.posts.unshift({
          id: 3, message: this._state.profilePage.newPostText, likesCount: 0,
        })
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
      }
        break
      case UPDATE_NEW_POST_TEXT: {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber()
      }
        break
      case UPDATE_NEW_MESSAGE_BODY: {
        this._state.dialogsPage.newMessageBody = action.body
        this._callSubscriber()
        break
      }
      case SEND_MESSAGE: {
        const body = this._state.dialogsPage.newMessageBody
        this._state.dialogsPage.newMessageBody = ''
        this._state.dialogsPage.messages.push({id: 6, message: body})
        this._callSubscriber()
        break
      }
    }
  },
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string) =>
  ({type: UPDATE_NEW_POST_TEXT, newText} as const)
export const updateNewMessageBodyAC = (newMessage: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: newMessage} as const)
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)

