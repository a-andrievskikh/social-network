import { instance } from 'common/api/instance'
import { Photos, APIResponse } from 'common/types/common-types'

export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 5, term = '') =>
    instance.get<UsersData>(`users?page=${currentPage}&count=${pageSize}&term=${term}`).then(res => res.data),
  setFollow: (userID: number) => instance.post<APIResponse>(`follow/${userID}`).then(res => res.data),
  setUnfollow: (userID: number) => instance.delete<APIResponse>(`follow/${userID}`).then(res => res.data),
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
