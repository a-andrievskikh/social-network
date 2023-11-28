import s from 'components/Login/Login.module.css'
import { LoginReduxFrom } from 'components/Login/LoginForm'

export const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData)
  }
  return (
    <div className={s.loginBlock}>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  )
}

