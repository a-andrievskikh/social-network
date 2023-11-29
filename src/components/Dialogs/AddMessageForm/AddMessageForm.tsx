import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export const AddMessageForm = ({ handleSubmit }: InjectedFormProps<NewMessageBodyT>) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={'newMessageBody'} component={'textarea'} placeholder={'Enter your message'} />
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