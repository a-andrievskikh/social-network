import { setFollowAC, setFollowTC, setUnfollowTC, toggleFollowingProgressAC } from 'store/users-reducer'
import { usersAPI } from 'components/Users/api/users-api'
import { APIResponse, ResultCodes } from 'common/types/common-types'

let userID1: number
let userID2: number
let userID3: number
let userID4: number

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  userID1 = 1
  userID2 = 2
  userID3 = 3
  userID4 = 4
  
  dispatchMock.mockClear()
  getStateMock.mockClear()
  userAPIMock.setFollow.mockClear()
  userAPIMock.setUnfollow.mockClear()
})

jest.mock('components/Users/api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: APIResponse = {
  resultCode: ResultCodes.Success,
  messages: [],
  data: {},
  fieldsErrors: [],
}

userAPIMock.setFollow.mockReturnValue(Promise.resolve(result))
userAPIMock.setUnfollow.mockReturnValue(Promise.resolve(result))

test('thunk unfollow success', async () => {
  const thunk = setFollowTC(userID1)
  await thunk(dispatchMock, getStateMock, {})
  
  expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgressAC(true, userID1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, setUnfollowTC(userID1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgressAC(false, userID1))
  
  expect(dispatchMock).toBeCalledTimes(3)
})

test('thunk follow success', async () => {
  const thunk = setFollowTC(userID1)
  await thunk(dispatchMock, getStateMock, {})
  
  expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgressAC(true, userID1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, setFollowAC(userID1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgressAC(false, userID1))
  
  expect(dispatchMock).toBeCalledTimes(3)
})
