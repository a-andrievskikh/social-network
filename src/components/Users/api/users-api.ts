import { instance } from 'common/api/instance'
import { UserType } from 'store/users-reducer'

export const usersAPI = {
  getUsers: (currentPage: number, pageSize: number) => instance.get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}`),
  getNewPage: (pageNumber: number, pageSize: number) => instance.get<UsersDataType>(`users?page=${pageNumber}&count=${pageSize}`),
  setFollow: (userID: number) => instance.post<ResponseT>(`/follow/${userID}`, {}),
  setUnfollow: (userID: number) => instance.delete<ResponseT>(`/follow/${userID}`, {}),
}

// Types
type UsersDataType = {
  items: UserType[]
  totalCount: number
  error: string
}

type ResponseT = {
  resultCode: number
  messages: string,
  data: {}
}