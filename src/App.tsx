import { useNavigate } from 'react-router-dom'
import s from 'App.module.css'
import { useEffect } from 'react'
import { initializeAppTC } from 'store/app-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { Preloader } from 'common/preloader/Preloader'
import { Header } from 'components/Header/Header'
import { Navbar } from 'components/Navbar/Navbar'
import { isAppInitializedSelector } from 'app-selectors'
import { isLoggedInSelector } from 'components/Header/header-selectors'
import { useRoutes } from 'common/hooks/useRoutes'

export const App = () => {
  const routes = useRoutes()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isAppInitialized = useAppSelector(isAppInitializedSelector)
  const isLoggedIn = useAppSelector<boolean>(isLoggedInSelector)
  
  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])
  
  if (!isAppInitialized) return <Preloader />
  
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <div className={s.appWrapperContent}>
        {routes}
      </div>
    </div>
  )
}

