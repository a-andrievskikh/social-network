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
import { toggleIsFetchingAC } from 'store/users-reducer'
import { authAPI } from 'common/api/auth-api'
import { setAuthUserDataAC, setIsLoggedInAC } from 'store/auth-reducer'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      dispatch(toggleIsFetchingAC(true))
      const res = await authAPI.me()
      if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC(true))
        dispatch(setAuthUserDataAC(res.data.data))
        dispatch(toggleIsFetchingAC(false))
      }
    })()
  }, [])

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
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