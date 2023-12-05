import s from 'common/components/FormsControls/FormsControls.module.css'

const FormControl = ({ meta: { touched, error }, children }: any) => {
  const showError = touched && error
  return (
    <div className={`${s.formControl} ${showError ? s.error : ''}`}>
      <div>
        {children}
      </div>
      {showError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props: any) => {
  const { input, meta, children, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props: any) => {
  const { input, meta, children, ...restProps } = props
  return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}