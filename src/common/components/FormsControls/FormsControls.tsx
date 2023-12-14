import s from 'common/components/FormsControls/FormsControls.module.css'
import React from 'react'
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'

const FormControl: React.FC<FormControl> = ({ meta: { touched, error }, children }) => {
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

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, children, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, children, ...restProps } = props
  return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

// Types
type FormControl = {
  meta: WrappedFieldMetaProps
}


//{ children: Element; input: WrappedFieldInputProps; meta: WrappedFieldMetaProps; }