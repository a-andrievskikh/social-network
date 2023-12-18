import { instance } from 'common/api/instance'
import { Photos, Response } from 'common/types/commonTypes'

export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 5) => instance.get<UsersData>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data),
  setFollow: (userID: number) => instance.post<Response>(`follow/${userID}`, {}),
  setUnfollow: (userID: number) => instance.delete<Response>(`follow/${userID}`, {}),
}

// Types
type UsersData = {
  items: UserData[]
  totalCount: number
  error: string | null
}

export type UserData = {
  id: number
  name: string
  status: string
  photos: Photos
  followed: boolean
}
