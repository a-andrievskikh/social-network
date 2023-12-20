import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { currentPageSelector, pageSizeSelector } from 'components/Users/users-selectors'
import { Field, Form, Formik } from 'formik'
import { Filter, setUsersTC } from 'store/users-reducer'

const validate = (values: any) => {
  const errors = {}
  return errors
}

export const UsersSearchForm = () => {
  const dispatch = useAppDispatch()
  const pageSize = useAppSelector(pageSizeSelector)
  const currentPage = useAppSelector(currentPageSelector)
  
  const submit = (values: Filter, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    if (values.term.trim()) {
      dispatch(setUsersTC(1, pageSize, values.term))
    }
    setSubmitting(false)
  }
  
  return (
    <div>
      <Formik
        initialValues={{ term: '' }}
        validate={validate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    
    </div>
  )
}