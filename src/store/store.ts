import { AnyAction, combineReducers, createStore } from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { ThunkDispatch } from 'redux-thunk'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateT = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateT, unknown, AnyAction>


declare global {
  interface Window {
    store: typeof store;
  }
}

window.store = store




