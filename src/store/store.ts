import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { combineReducers, createStore } from 'redux'

export type AppRootStateType = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
})

export const store = createStore(rootReducer)




