import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from 'store/auth-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateT = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateT, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateT, unknown, AnyAction>

declare global {
  interface Window {
    store: typeof store;
  }
}

window.store = store




