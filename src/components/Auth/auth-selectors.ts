import { AppRootStateT } from 'store/store'
import { CaptchaT } from 'store/auth-reducer'

export const ownerIdSelector = (s: AppRootStateT) => s.auth.data.id as number
export const captchaUrlSelector = (s: AppRootStateT) => s.auth.captchaUrl as CaptchaT