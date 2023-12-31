import s from 'common/components/FormsControls/FormsControls.module.css'
import React from 'react'
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'

const FormControl = ({ meta: { touched, error }, children }: FormControl) => {
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

export const Textarea = (props: WrappedFieldProps) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props: WrappedFieldProps) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

// Types
type FormControl = {
  meta: WrappedFieldMetaProps
  children: any
}

//{ children: Element; input: WrappedFieldInputProps; meta: WrappedFieldMetaProps; }