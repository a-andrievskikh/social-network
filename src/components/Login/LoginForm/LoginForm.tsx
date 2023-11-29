import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from 'common/FormsControls/FormsControls'
import { maxLengthCreator, required } from 'utils/validators'

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({ handleSubmit }: InjectedFormProps<FormDataT>) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={'login'}
               type={'text'}
               component={Input}
               validate={[required, maxLength20]}
               placeholder={'Login'} />
      </div>
      <div>
        <Field name={'password'}
               type={'text'}
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

export const LoginReduxFrom = reduxForm<FormDataT>({ form: 'login' })(LoginForm)

// Types
export type FormDataT = {
  login: string
  password: string
  rememberMe: boolean
}