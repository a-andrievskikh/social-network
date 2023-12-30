import { Route, Routes } from 'react-router-dom'
import s from 'App.module.css'
import { useEffect } from 'react'
import { initializeAppTC } from 'store/app-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { Preloader } from 'common/preloader/Preloader'
import { Header } from 'components/Header/Header'
import { Navbar } from 'components/Navbar/Navbar'
import { SuspenseComponent } from 'common/components/Suspense/SuspenseComponent'
import { isAppInitializedSelector } from 'app-selectors'
import { Profile } from 'components/Profile/Profile'
import { Auth } from 'components/Auth/Auth'
import { Dialogs } from 'components/Dialogs/Dialogs'
import { Users } from 'components/Users/Users'
import { News } from 'components/News/News'
import { Music } from 'components/Music/Music'
import { Settings } from 'components/Settings/Settings'

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
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <div className={s.appWrapperContent}>
        <Routes>
          <Route path="/" element={<SuspenseComponent component={Profile} />} />
          <Route path="/login" element={<SuspenseComponent component={Auth} />} />
          <Route path="/profile/:userID?" element={<SuspenseComponent component={Profile} />} />
          <Route path="/dialogs" element={<SuspenseComponent component={Dialogs} />} />
          <Route path="/users" element={<SuspenseComponent component={Users} />} />
          <Route path="/news" element={<SuspenseComponent component={News} />} />
          <Route path="/music" element={<SuspenseComponent component={Music} />} />
          <Route path="/settings" element={<SuspenseComponent component={Settings} />} />
          <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
      </div>
    </div>
  )
}

/*<Route path="/" element={<SuspenseComponent component={Profile} />} />
 <Route path="/login" element={<SuspenseComponent component={Auth} />} />
 <Route path="/profile:userId?" element={<SuspenseComponent component={Profile} />} />
 <Route path="/dialogs" element={<SuspenseComponent component={Dialogs} />} />
 <Route path="/users" element={<SuspenseComponent component={Users} />} />
 <Route path="/news" element={<SuspenseComponent component={News} />} />
 <Route path="/music" element={<SuspenseComponent component={Music} />} />
 <Route path="/settings" element={<SuspenseComponent component={Settings} />} />
 <Route path="*" element={<div>404 NOT FOUND</div>} />*/

