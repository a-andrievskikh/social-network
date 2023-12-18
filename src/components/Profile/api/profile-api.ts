import { instance } from 'common/api/instance'
import { Photos, Response } from 'common/types/commonTypes'

export const profileAPI = {
  getProfile: (userID: number) => instance.get<ProfileType>(`profile/${userID}`),
  getStatus: (userID: number) => instance.get<string>(`profile/status/${userID}`),
  updateStatus: (status: string) => instance.put<Response>(`profile/status`, { status }),
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