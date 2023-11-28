import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ handleSubmit }: any) => {

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

export const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm)