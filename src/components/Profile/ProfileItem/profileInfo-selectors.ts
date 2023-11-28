import { AppRootStateT } from 'store/store'

export const profileSelector = (s: AppRootStateT) => s.profilePage.profile
export const largePhotoSelector = (s: AppRootStateT) => s.profilePage.profile.photos.large
export const aboutMeSelector = (s: AppRootStateT) => s.profilePage.profile.aboutMe
export const userStatusSelector = (s: AppRootStateT) => s.profilePage.userStatus
