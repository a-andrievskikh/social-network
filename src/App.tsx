import { Route } from 'react-router-dom'
import './App.css'
import { Header } from 'components/Header/Header'
import { Navbar } from 'components/Navbar/Navbar'
import { Profile } from 'components/Profile/Profile'
import { Dialogs } from 'components/Dialogs/Dialogs'
import { News } from 'components/News/News'
import { Music } from 'components/Music/Music'
import { Settings } from 'components/Settings/Settings'
import { Users } from 'components/Users/Users'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useEffect } from 'react'
import { Auth } from 'components/Auth/Auth'
import { initializeAppTC } from 'store/app-reducer'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { Preloader } from 'common/preloader/Preloader'

export const App = () => {
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector<boolean>(s => s.app.isAppInitialized)

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [dispatch])
  if (!isAppInitialized) return <Preloader />

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/login" render={() => <Auth />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/users" render={() => <Users />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  )
}