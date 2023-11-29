import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export const AddPostForm = ({ handleSubmit }: InjectedFormProps<NewPostBodyT>) => {

  return (
    <form onSubmit={handleSubmit}>
      <Field name={'newPostBody'} component={'textarea'} placeholder={'Add new post'} />
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