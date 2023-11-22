import { instance } from 'common/api/instance'
import { ProfileType } from 'store/profile-reducer'

export const profileAPI = {
  getProfile: (userID: number) => instance.get<ProfileType>(`profile/${userID}`),
}