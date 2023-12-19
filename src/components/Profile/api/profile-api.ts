import { instance } from 'common/api/instance'
import { Photos, APIResponse } from 'common/types/common-types'

export const profileAPI = {
  getProfile: (userID: number) => instance.get<ProfileType>(`profile/${userID}`).then(res => res.data),
  getStatus: (userID: number) => instance.get<string>(`profile/status/${userID}`).then(res => res.data),
  updateStatus: (status: string) => instance.put<APIResponse>(`profile/status`, { status }).then(res => res.data),
}

// Types
export type ProfileType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string
  fullName: string
  contacts: Contacts,
  photos: Photos
}

type Contacts = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}