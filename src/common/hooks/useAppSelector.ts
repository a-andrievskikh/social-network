import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { AppRootStateT } from 'store/store'

export const useAppSelector: TypedUseSelectorHook<AppRootStateT> = useSelector
