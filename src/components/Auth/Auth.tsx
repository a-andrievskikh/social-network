import s from 'components/Auth/Auth.module.css'
import { LoginReduxFrom } from 'components/Auth/LoginForm/LoginForm'
import { LoginT, loginTC } from 'store/auth-reducer'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { isLoggedInSelector } from 'components/Header/header-selectors'

export const Auth = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(isLoggedInSelector)
  const onSubmit = (formData: LoginT) => {
    console.log(formData)
    dispatch(loginTC(formData))
  }
  
  if (isLoggedIn) return <Navigate to={'/profile'} />
  
  return (
    <div className={s.loginBlock}>
      <h1>LOGIN</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  )
}

