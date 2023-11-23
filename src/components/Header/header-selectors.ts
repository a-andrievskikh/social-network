import { AppRootStateT } from 'store/store'

export const isLoggedInSelector = (s: AppRootStateT) => s.auth.isLoggedIn
export const loginSelector = (s: AppRootStateT) => s.auth.userData.login