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
}
type SidebarType = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

export type StoreType = {
  _state: RootStateType,
  getState: () => RootStateType
  _callSubscriber: () => void
  addPost: () => void
  updateNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
}

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
    },
    sidebar: {},
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    this._state.profilePage.posts.unshift({
      id: 3, message: this._state.profilePage.newPostText, likesCount: 0,
    })
    this._state.profilePage.newPostText = ''
    this._callSubscriber()
    /*rerenderEntireTree({
      ...state,
      profilePage: {
        ...state.profilePage,
        posts: [{id: 3, message: postMessage, likesCount: 0}, ...posts],
      } ,
    })*/
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber()
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
}
