import { AppRootStateT } from 'store/store'

export const ownerIdSelector = (s: AppRootStateT) => s.auth.data.id as number