export type Photos = {
  small: string | null
  large: string | null
}

export enum ResultCodes {
  Success = 0,
  Failed = 1,
  Captcha = 10
}

export type APIResponse<D = {}> = {
  resultCode: ResultCodes
  messages: string[],
  fieldsErrors: string[]
  data: D
}

