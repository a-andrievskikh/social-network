import { InitialState, setFollowAC, setUnfollowAC, usersReducer } from 'store/users-reducer'

let startState: InitialState
let userID1: number
let userID2: number
let userID3: number
let userID4: number

beforeEach(() => {
  userID1 = 1
  userID2 = 2
  userID3 = 3
  userID4 = 4
  
  startState = {
    users: [
      { id: userID1, name: 'Mike', followed: false, photos: { small: null, large: null }, status: 'status 0' },
      { id: userID2, name: 'John', followed: false, photos: { small: null, large: null }, status: 'status 1' },
      { id: userID3, name: 'Sarah', followed: true, photos: { small: null, large: null }, status: 'status 0' },
      { id: userID4, name: 'Bob', followed: true, photos: { small: null, large: null }, status: 'status 0' },
    ],
    pageSize: 5,
    portionSize: 20,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    filter: { term: '' },
  }
})

test('follow should be success', () => {
  const endState = usersReducer(startState, setFollowAC(userID2))
  
  expect(endState.users[0].followed).toBeFalsy()
  expect(endState.users.find(u => u.id === userID2)?.followed).toBeTruthy()
})

test('unfollow should be success', () => {
  const endState = usersReducer(startState, setUnfollowAC(userID4))
  
  expect(endState.users.find(u => u.id === userID3)?.followed).toBeTruthy()
  expect(endState.users.find(u => u.id === userID4)?.followed).toBeFalsy()
})