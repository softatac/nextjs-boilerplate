export type TUser = {
  id: number
  username?: string
  _user_type_?: string

  firstName: string
  lastName: string
  name: string
}

export type TLoginRequestData = {
  username: string
  password: string
}
export type TRegisterRequestData = TLoginRequestData

export type TLoginResponseData = {
  user: TUser
  userType: string
  sessionId: string
  sessionName: string
  roles: Array<string>
}
