import { instance } from 'common/api/instance'
import { LoginT } from 'store/auth-reducer'

export const authAPI = {
  me: () => instance.get<Response<MeDataT>>(`auth/me`).then(res => res.data),

  login: ({ email, password, rememberMe = false, captcha = null }: LoginT) =>
    (instance.post<Response<{ userId: number }>>(`auth/login`, { email, password, rememberMe, captcha }))
      .then(res => res.data),

  logout: () => instance.delete<Response>(`auth/login`).then(res => res.data),
  getCaptchaUrl: () => instance.get<{ url: string }>(`security/get-captcha-url`),
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