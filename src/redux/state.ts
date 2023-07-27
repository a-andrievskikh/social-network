import { rerenderEntireTree } from '../render'

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
export type ProfilePageType = {
  posts: PostType[]
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

const posts: PostType[] = [
  {id: 1, message: 'Hi, how are you?', likesCount: 15},
  {id: 2, message: 'It\'s my first project.', likesCount: 20},
]

const dialogs: DialogType[] = [
  {id: 1, name: 'Dymich'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'},
]

const messages: MessageType[] = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 6, message: 'Yo'},
]

export const state: RootStateType = {
  profilePage: {
    posts,
  },
  dialogsPage: {
    dialogs,
    messages,
  },
  sidebar: {},
}

export const addPost = (postMessage: string) => {
  state.profilePage.posts.unshift({id: 3, message: postMessage, likesCount: 0})
  rerenderEntireTree(state)

  /*rerenderEntireTree({
    ...state,
    profilePage: {
      ...state.profilePage,
      posts: [{id: 3, message: postMessage, likesCount: 0}, ...posts],
    },
  })*/
}