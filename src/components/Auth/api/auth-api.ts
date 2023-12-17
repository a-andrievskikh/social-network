import { instance } from 'common/api/instance'
import { LoginT } from 'store/auth-reducer'
import { Response } from 'common/types/commonTypes'

export const authAPI = {
  me: () => instance.get<Response<MeData>>(`auth/me`).then(res => res.data),
  
  login: ({ email, password, rememberMe = false, captcha = null }: LoginT) =>
    (instance.post<Response<LoginData>>(`auth/login`, { email, password, rememberMe, captcha }))
    .then(res => res.data),
  
  logout: () => instance.delete<Response>(`auth/login`).then(res => res.data).then(res => res.resultCode),
  getCaptchaUrl: () => instance.get<CaptchaData>(`security/get-captcha-url`).then(res => res.data.url),
}

// Types
type MeData = {
  id: number
  email: string
  login: string
}

type LoginData = { userId: number }
type CaptchaData = { url: string }