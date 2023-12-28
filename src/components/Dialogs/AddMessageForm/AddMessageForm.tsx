import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Textarea } from 'common/components/FormsControls/FormsControls'
import { maxLengthCreator, required } from 'utils/validators'

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = ({ handleSubmit }: InjectedFormProps<NewMessageBodyT>) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={'newMessageBody'}
               type={'textarea'}
               component={Textarea}
               validate={[required, maxLength50]}
               placeholder={'Enter your message'}
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

export const AddMessageReduxForm = reduxForm<NewMessageBodyT>({ form: 'newMessageBody' })(AddMessageForm)

export type NewMessageBodyT = {
  newMessageBody: string
}