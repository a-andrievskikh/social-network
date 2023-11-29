import s from './FormsControls.module.css'

const FormControl = ({ input, meta, children }: any) => {
  const showError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${showError ? s.error : ''}`}>
      <div>
        {children}
      </div>
      {showError && <span>{meta.error}</span>}
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