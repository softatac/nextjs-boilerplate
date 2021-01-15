import createAuthActions from './actions'
import * as AuthAPI from '@lib/api/auth'
import {LoginResponseMockSuccess, LoginResponseMockError} from '__mocks__'

jest.mock('@lib/api/auth')

const mockLogin = AuthAPI.login as jest.Mock
mockLogin
  .mockImplementationOnce(() => Promise.resolve(LoginResponseMockSuccess))
  .mockImplementationOnce(() => Promise.reject(LoginResponseMockError))
  .mockImplementationOnce(() => Promise.resolve(LoginResponseMockSuccess))

const mockSignup = AuthAPI.signup as jest.Mock
mockSignup
  .mockImplementationOnce(() => Promise.resolve())
  .mockImplementationOnce(() => Promise.reject(LoginResponseMockError))

const mockLogout = AuthAPI.logout as jest.Mock
mockLogout
  .mockImplementationOnce(() => Promise.resolve())
  .mockImplementationOnce(() => Promise.reject(LoginResponseMockError))

const mockRefresh = AuthAPI.refreshLogin as jest.Mock
mockRefresh
  .mockImplementationOnce(() => Promise.resolve(LoginResponseMockSuccess))
  .mockImplementationOnce(() => Promise.reject(LoginResponseMockError))

const mockSetFn = jest.fn()
const authActions = createAuthActions(mockSetFn)

afterEach(() => {
  mockSetFn.mockClear()
})

test('login success', async () => {
  await authActions.login('username', 'password')

  expect(mockSetFn).toHaveBeenCalledTimes(1)
})

test('login error', async () => {
  try {
    await authActions.login('username', 'password')
  } catch (e) {}

  expect(mockSetFn).not.toHaveBeenCalled()
})

test('refresh success', async () => {
  await authActions.refreshLogin()

  expect(mockSetFn).toBeCalledWith({
    data: LoginResponseMockSuccess,
    initialized: true,
    isLoggedIn: true,
    roles: ['ROLE_USER'],
    hasRole: expect.any(Function),
    userType: 'user',
  })
})

test('refresh error', async () => {
  try {
    await authActions.refreshLogin()
  } catch (e) {}

  expect(mockSetFn).toHaveBeenCalled()
})

test('logout success', async () => {
  await authActions.logout()

  expect(mockSetFn).toBeCalledWith(
    expect.objectContaining({
      data: null,
      initialized: true,
      isLoggedIn: false,
      roles: [],
      hasRole: expect.any(Function),
      userType: undefined,
    })
  )
})

test('logout error', async () => {
  try {
    await authActions.logout()
  } catch (e) {}

  expect(mockSetFn).not.toHaveBeenCalled()
})
