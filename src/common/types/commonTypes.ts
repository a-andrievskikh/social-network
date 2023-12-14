export type CommonTypes = {
  small: string | null
  large: string | null
}

export enum ResultCodes {
  Success = 0,
  Failed = 1,
  Captcha = 10
}