import { AppRootStateT } from 'store/store'

export const isLoggedInSelector = (s: AppRootStateT) => s.auth.isLoggedIn as boolean
export const loginSelector = (s: AppRootStateT) => s.auth.data.login as null | string