import { AppRootStateT } from 'store/store'
import { ProfileType } from 'store/profile-reducer'

export const profileSelector = (s: AppRootStateT) => s.profilePage.profile as ProfileType
export const largePhotoSelector = (s: AppRootStateT) => s.profilePage.profile.photos.large as string
export const statusTextSelector = (s: AppRootStateT) => s.profilePage.statusText as string
