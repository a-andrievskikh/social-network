import { instance } from 'common/api/instance'
import { UsersDataType } from 'store/users-reducer'

export const usersAPI = {
  getUsersPortion: (currentPage: number, pageSize: number) => instance.get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}`),
  getNewPage: (pageNumber: number, pageSize: number) => instance.get<UsersDataType>(`users?page=${pageNumber}&count=${pageSize}`),
}