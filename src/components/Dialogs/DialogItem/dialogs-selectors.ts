import { AppRootStateT } from 'store/store'

export const dialogsSelector = (s: AppRootStateT) => s.dialogsPage.dialogs
export const messagesSelector = (s: AppRootStateT) => s.dialogsPage.messages
export const newMessageBodySelector = (s: AppRootStateT) => s.dialogsPage.newMessageBody