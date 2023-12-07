import { instance } from 'common/api/instance'
import { LoginT } from 'store/auth-reducer'

export const authAPI = {
  me: () => instance.get<Response<MeDataT>>(`/auth/me`),
  login: (login: LoginT) => instance.post<Response<{ userId: number }>>(`/auth/login`, login),
  logout: () => instance.delete<Response>(`/auth/login`),
}

// Types
type Response<T = {}> = {
  resultCode: number
  messages: string[],
  data: T
}

type MeDataT = {
  id: number
  email: string
  login: string
}