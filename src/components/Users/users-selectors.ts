import { AppRootStateT } from 'store/store'
import { UserType } from 'store/users-reducer'

export const usersSelector = (s: AppRootStateT) => s.usersPage.users as UserType[]
export const pageSizeSelector = (s: AppRootStateT) => s.usersPage.pageSize as number
export const totalItemsCountSelector = (s: AppRootStateT) => s.usersPage.totalItemsCount as number
export const portionSizeSelector = (s: AppRootStateT) => s.usersPage.portionSize as number
export const currentPageSelector = (s: AppRootStateT) => s.usersPage.currentPage as number
export const isFetchingSelector = (s: AppRootStateT) => s.usersPage.isFetching as boolean
export const followingInProgressSelector = (s: AppRootStateT) => s.usersPage.followingInProgress as number[]