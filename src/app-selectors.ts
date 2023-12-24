import { AppRootStateT } from 'store/store'

export const isAppInitializedSelector = (s: AppRootStateT) => s.app.isAppInitialized as boolean