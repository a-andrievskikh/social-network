import { Redirect, Route } from 'react-router-dom'
import 'App.module.css'
import { lazy, useEffect } from 'react'
import { initializeAppTC } from 'store/app-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { Preloader } from 'common/preloader/Preloader'
import { Header } from 'components/Header/Header'
import { Navbar } from 'components/Navbar/Navbar'
import { SuspenseComponent } from 'common/components/Suspense/SuspenseComponent'
import { isAppInitializedSelector } from 'app-selectors'

const Auth = lazy(async () => ({ default: (await import('components/Auth/Auth')).Auth }))
const Profile = lazy(async () => ({ default: (await import('components/Profile/Profile')).Profile }))
const Dialogs = lazy(async () => ({ default: (await import('components/Dialogs/Dialogs')).Dialogs }))
const Users = lazy(async () => ({ default: (await import('components/Users/Users')).Users }))
const News = lazy(async () => ({ default: (await import('components/News/News')).News }))
const Music = lazy(async () => ({ default: (await import('components/Music/Music')).Music }))
const Settings = lazy(async () => ({ default: (await import('components/Settings/Settings')).Settings }))

export const App = () => {
  const catchAllUnhandledErrors = (promiseRejectionEvent: Event) => {
    alert('Some error occurred')
  }
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(isAppInitializedSelector)
  
  useEffect(() => {
    dispatch(initializeAppTC())
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
    
    return () => window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
  }, [])
  
  if (!isAppInitialized) return <Preloader />
  
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/" render={() => <Redirect to={'/profile'} />} />
        <Route path="/login" render={() => <SuspenseComponent component={Auth} />} />
        <Route path="/profile" render={() => <SuspenseComponent component={Profile} />} />
        <Route path="/dialogs" render={() => <SuspenseComponent component={Dialogs} />} />
        <Route path="/users" render={() => <SuspenseComponent component={Users} />} />
        <Route path="/news" render={() => <SuspenseComponent component={News} />} />
        <Route path="/music" render={() => <SuspenseComponent component={Music} />} />
        <Route path="/settings" render={() => <SuspenseComponent component={Settings} />} />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </div>
    </div>
  )
}