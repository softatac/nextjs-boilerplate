import {TLoginResponseData} from '@lib/api/types/auth'
import {IProvideAuthState} from './types'

export const AuthStateFactory = (
  data: TLoginResponseData = null,
  initialized = false
): IProvideAuthState => {
  const roles = data?.roles || []
  // @todo - memoize?
  const hasRole = (role) => roles.indexOf(role) !== -1

  return {
    initialized: !!data || initialized,
    isLoggedIn: !!data,
    data,
    userType: data?.userType,
    roles,
    hasRole,
  }
}

export const AuthState = {
  Uninitialized: () => AuthStateFactory(),
  Unauthenticated: () => AuthStateFactory(null, true),
  Authenticated: (data: TLoginResponseData) => AuthStateFactory(data),
}
