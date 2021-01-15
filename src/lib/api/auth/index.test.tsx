import {login, signup, logout, refreshLogin} from '.'
import httpClient from '@lib/api/httpClient'
import {LoginResponseMockSuccess} from '__mocks__'

jest.mock('@lib/api/httpClient')
const mockPost = httpClient.post as jest.Mock
const mockGet = httpClient.get as jest.Mock

const LoggedInResponse = {
  data: LoginResponseMockSuccess,
}

test('login API call', async () => {
  mockPost.mockImplementationOnce(() => Promise.resolve(LoggedInResponse))
  const {user} = await login({
    username: 'username',
    password: 'password',
  })
  expect(user.firstName).toBe('test')
})

test('check login status API call', async () => {
  mockGet.mockImplementationOnce(() => Promise.resolve(LoggedInResponse))
  const {
    user: {firstName},
  } = await refreshLogin()
  expect(firstName).toBe('test')
})

test('register API call', async () => {
  mockPost.mockImplementationOnce(() =>
    Promise.resolve({
      data: {},
    })
  )
  const res = await signup({
    username: 'username',
    password: 'password',
  })
  expect(res).toEqual({})
})

test('logout API call', async () => {
  mockPost.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        success: true,
      },
    })
  )

  const res = await logout()
  expect(res).toEqual({success: true})
})
