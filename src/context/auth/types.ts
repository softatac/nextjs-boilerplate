import {TLoginResponseData} from '@lib/api/types/auth'

export interface IProvideAuthState {
  initialized: boolean
  isLoggedIn: boolean
  data: TLoginResponseData
  userType: string | null
  roles: Array<string>
  hasRole: (string) => boolean
}

export interface IProvideAuthActions {
  login: (email: string, password: string) => Promise<TLoginResponseData>
  logout: () => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  refreshLogin: () => Promise<TLoginResponseData>
}

export interface IProvideAuth {
  state: IProvideAuthState
  actions: IProvideAuthActions
}
