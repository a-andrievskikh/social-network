import { addPostAC, deletePostAC, InitialStateType, PostType, profileReducer, ProfileType } from 'store/profile-reducer'
import rick from 'assets/images/rick.jpg'
import { v1 } from 'uuid'

let state: InitialStateType
let user1: string
let user2: string

beforeEach(() => {
  user1 = v1()
  user2 = v1()
  state = {
    posts: [
      { id: user1, message: 'Hi, how are you?', likesCount: 15 },
      { id: user2, message: `It's my first project.`, likesCount: 20 },
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
      userId: 2,
      photos: {
        small: rick,
        large: rick,
      },
    } as ProfileType,
    statusText: 'Initial Status',
  }
})


it('new post should be added', () => {
  const newPostText = 'New Post Text'
  const newState = profileReducer(state, addPostAC(newPostText))

  expect(newState.posts.length).toBe(3)
  expect(newState.posts[0].message).toBe(newPostText)
  expect(newState.posts[0].likesCount).toBe(0)
})

it('post should be deleted', () => {
  const postID = user2
  const newState = profileReducer(state, deletePostAC(postID))

  expect(newState.posts.length).toBe(1)
  expect(newState.posts.every(p => p.id !== postID)).toBeTruthy()
})
