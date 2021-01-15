import * as AuthAPI from '@lib/api/auth'
import {AuthState} from './state'

export default function createAuthActions(setAuthState) {
  const login = (username: string, password: string) =>
    AuthAPI.login({username, password}).then((data) => setAuthState(AuthState.Authenticated(data)))

  const signup = (username: string, password: string) =>
    AuthAPI.signup({username, password}).then(() => login(username, password))

  const logout = () => AuthAPI.logout().then(() => setAuthState(AuthState.Unauthenticated()))

  const refreshLogin = () =>
    AuthAPI.refreshLogin().then(
      (data) => setAuthState(AuthState.Authenticated(data)),
      () => setAuthState(AuthState.Unauthenticated())
    )

  return {login, signup, refreshLogin, logout}
}
