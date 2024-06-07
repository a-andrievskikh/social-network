import { instance } from 'common/api/instance'
import { LoginT } from 'store/auth-reducer'
import { APIResponse, ResultCodes } from 'common/types/common-types'

export const authAPI = {
  me: () => instance.get<APIResponse<MeData>>(`auth/me`).then(res => res.data),
  
  login: ({ email, password, rememberMe = false, captcha = null }: LoginT) =>
    (instance.post<APIResponse<LoginData>>(`auth/login`, { email, password, rememberMe, captcha }))
    .then(res => res.data),
  
  logout: () => instance.delete<APIResponse>(`auth/login`).then(res => res.data.resultCode as ResultCodes),
  
  getCaptchaUrl: () => instance.get<CaptchaData>(`security/get-captcha-url`).then(res => res.data.url as string),
}

// Types
type MeData = {
  id: number
  email: string
  login: string
}

type LoginData = { userId: number }
type CaptchaData = { url: string }
