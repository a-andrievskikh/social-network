import { AppRootStateT } from 'store/store'
import { DialogType, MessageType } from 'store/dialogs-reducer'

export const dialogsSelector = (s: AppRootStateT) => s.dialogsPage.dialogs as DialogType[]
export const messagesSelector = (s: AppRootStateT) => s.dialogsPage.messages as MessageType[]