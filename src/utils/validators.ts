type Validator = (value: string) => string | undefined

export const required: Validator = value => {
  if (value) return undefined
  return `Field is required`
}

export const maxLengthCreator = (maxLength: number): Validator => value => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`
  return undefined
}

