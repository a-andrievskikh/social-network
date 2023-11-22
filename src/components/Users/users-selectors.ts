import { AppRootStateT } from 'store/store'

export const usersSelector = (s: AppRootStateT) => s.usersPage.users
export const pageSizeSelector = (s: AppRootStateT) => s.usersPage.pageSize
export const totalUsersCountSelector = (s: AppRootStateT) => s.usersPage.totalUsersCount
export const currentPageSelector = (s: AppRootStateT) => s.usersPage.currentPage
export const isFetchingSelector = (s: AppRootStateT) => s.usersPage.isFetching