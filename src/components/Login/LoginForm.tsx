import { Field, InjectedFormProps, reduxForm } from 'redux-form'

const LoginForm = ({ handleSubmit }: InjectedFormProps<FormDataT>) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={'login'} component={'input'} placeholder={'Login'} />
      </div>
      <div>
        <Field name={'password'} component={'input'} placeholder={'Password'} />
      </div>
      <div>
        <Field name={'rememberMe'} type="checkbox" component={'input'} /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export const LoginReduxFrom = reduxForm<FormDataT>({ form: 'login' })(LoginForm)

// Types
export type FormDataT = {
  login: string
  password: string
  rememberMe: boolean
}