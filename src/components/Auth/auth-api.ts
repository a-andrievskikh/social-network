import { instance } from 'common/api/instance'
import { LoginT } from 'store/auth-reducer'

export const authAPI = {
  me: () => instance.get<UserDataResponseType>(`/auth/me`),
  login: (login: LoginT) => instance.post<LoginResponseT>(`/auth/login`, login),
  logout: () => instance.delete<LogoutResponseT>(`/auth/login`),
}

type UserDataResponseType = {
  resultCode: number
  messages: string[],
  data: {
    id: number
    email: string
    login: string
  }
}

type LoginResponseT = {
  resultCode: number
  messages: string[],
  data: {
    userId: number
  }
}
type LogoutResponseT = {
  resultCode: number
  messages: string[],
  data: {}
}