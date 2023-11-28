import { instance } from 'common/api/instance'
import { ProfileType } from 'store/profile-reducer'

export const profileAPI = {
  getProfile: (userID: number) => instance.get<ProfileType>(`profile/${userID}`),
  getStatus: (userID: number) => instance.get<string>(`profile/status/${userID}`),
  updateStatus: (status: string) => instance.put<ResponseT>(`profile/status`, { status }),
}

type ResponseT = {
  resultCode: number
  messages: string,
  data: {}
}