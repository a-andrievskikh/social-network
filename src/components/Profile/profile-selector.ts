import { AppRootStateT } from 'store/store'
import { ProfileType } from 'components/Profile/api/profile-api'

export const profileSelector = (s: AppRootStateT) => s.profilePage.profile as ProfileType
export const largePhotoSelector = (s: AppRootStateT) => s.profilePage.profile?.photos.large as string
export const aboutMeSelector = (s: AppRootStateT) => s.profilePage.aboutMe as string
export const statusTextSelector = (s: AppRootStateT) => s.profilePage.statusText as string