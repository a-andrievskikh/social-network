import { instance } from 'common/api/instance'

export const authAPI = {
  me: () => instance.get<UserDataResponseType>(`/auth/me`),
}

type UserDataResponseType = {
  resultCode: number
  messages: [],
  data: {
    id: number
    email: string
    login: string
  }
}