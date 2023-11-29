import s from 'components/Login/Login.module.css'
import { FormDataT, LoginReduxFrom } from 'components/Login/LoginForm'

export const Login = () => {
  const onSubmit = (formData: FormDataT) => {
    console.log(formData)
  }
  return (
    <div className={s.loginBlock}>
      <h1>Login</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  )
}

