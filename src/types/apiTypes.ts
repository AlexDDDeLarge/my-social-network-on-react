import { UserType } from "./types"

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

export type ResponseDataType<T> = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: T
}

export type MeDataType = {id: number, email: string, login: string}
export type LoginDataType = {userId: number}
export type DataType = {}

export type UsersDataType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type SecurityType = {
  url: string
}