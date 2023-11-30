import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from 'common/FormsControls/FormsControls'
import { maxLengthCreator, required } from 'utils/validators'
import { LoginT } from 'store/auth-reducer'

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({ handleSubmit }: InjectedFormProps<LoginT>) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={'email'}
               type={'email'}
               component={Input}
               validate={[required, maxLength20]}
               placeholder={'Login'} />
      </div>
      <div>
        <Field name={'password'}
               type={'password'}
               component={Input}
               validate={[required, maxLength20]}
               placeholder={'Password'} />
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

export const LoginReduxFrom = reduxForm<LoginT>({ form: 'login' })(LoginForm)