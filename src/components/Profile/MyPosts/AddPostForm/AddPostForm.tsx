import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required } from 'utils/validators'
import { Textarea } from 'common/components/FormsControls/FormsControls'
import { maxLengthCreator } from 'utils/validators'

const maxLength10 = maxLengthCreator(10)

export const AddPostForm = ({ handleSubmit }: InjectedFormProps<NewPostBodyT>) => {

  return (
    <form onSubmit={handleSubmit}>
      <Field name={'newPostBody'}
             type={'textarea'}
             component={Textarea}
             validate={[required, maxLength10]}
             placeholder={'Add new post'}
      />
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export const AddPostReduxForm = reduxForm<NewPostBodyT>({ form: 'newPostBody' })(AddPostForm)

export type NewPostBodyT = {
  newPostBody: string
}