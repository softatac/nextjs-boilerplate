import {TLoginResponseData} from '@lib/api/types/auth'

export const mockNotLoggedIn403Response = {
  status: 403,
  message: 'Not logged in',
}
export const mockForbidden403Response = {
  status: 403,
  message: 'Forbidden',
}
export const mockedLoginError = {
  status: 422,
  message: 'Invalid username or password',
}

export const LoginResponseMockSuccess: TLoginResponseData = {
  user: {id: 1, firstName: 'test', lastName: 'test', name: 'test test'},
  userType: 'user',
  sessionId: '<Mock sessionId>',
  sessionName: '<Mock sessionData>',
  roles: ['ROLE_USER'],
}
