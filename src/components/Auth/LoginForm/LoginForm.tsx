import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from 'common/components/FormsControls/FormsControls'
import { maxLengthCreator, required } from 'utils/validators'
import { LoginT } from 'store/auth-reducer'
import s from 'components/Auth/Auth.module.css'

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({ handleSubmit, error }: InjectedFormProps<LoginT>) => {

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
      {error && <div className={s.formCommonError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export const LoginReduxFrom = reduxForm<LoginT>({ form: 'login' })(LoginForm)