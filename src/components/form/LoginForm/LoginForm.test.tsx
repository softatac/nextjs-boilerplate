import React from 'react'
import LoginForm from './container'
import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import createAuthActions from '@context/auth/actions'
import ProvideAuth from '@context/auth'

// MOCKS
jest.mock('@context/auth/actions')
const mockCreateAuthActions = createAuthActions as jest.Mock
const mockAuthActions = {
  login: jest.fn(),
  signup: jest.fn(),
  logout: jest.fn(),
  refreshLogin: jest.fn(),
}

mockCreateAuthActions.mockImplementation(() => mockAuthActions)
mockAuthActions.login
  .mockImplementationOnce(jest.fn(() => Promise.resolve()))
  .mockImplementationOnce(jest.fn(() => Promise.reject({message: 'api error message'})))

const submit = () => fireEvent.submit(screen.getByRole('button'))
const getUsername = () =>
  (screen.getByRole('textbox', {
    name: /utilizator/i,
  }) as HTMLInputElement).value
const setUsername = (value) =>
  fireEvent.input(screen.getByRole('textbox', {name: /utilizator/i}), {
    target: {value},
  })

const getPassword = () => (screen.getByLabelText('parola *') as HTMLInputElement).value
const setPassword = (value) =>
  fireEvent.input(screen.getByLabelText('parola *'), {
    target: {value},
  })

const MockLoginForm = () => (
  <ProvideAuth>
    <LoginForm />
  </ProvideAuth>
)

describe('LoginFrom', () => {
  beforeEach(() => {
    render(<MockLoginForm />)
  })

  afterEach(() => {
    mockAuthActions.login.mockClear()
  })

  it('should display required error when value is invalid', async () => {
    submit()
    expect(await screen.findAllByRole('alert')).toHaveLength(2)
    expect(mockAuthActions.login).not.toBeCalled()
  })

  it('should display matching error when username is invalid', async () => {
    setUsername('te')
    setPassword('Password12')
    submit()

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(mockAuthActions.login).not.toBeCalled()
    expect(getUsername()).toBe('te')
    expect(getPassword()).toBe('Password12')
  })

  it('should display min length error when password is invalid', async () => {
    setUsername('demo@soferonline.ro')
    setPassword('ps')
    submit()

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(mockAuthActions.login).not.toBeCalled()
    expect(getUsername()).toBe('demo@soferonline.ro')
    expect(getPassword()).toBe('ps')
  })

  it('should not display errors when form is valid', async () => {
    setUsername('test@gmail.com')
    setPassword('Password12')
    submit()

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0))
    expect(mockAuthActions.login).toBeCalledWith('test@gmail.com', 'Password12')
    // expect(getUsername()).toBe('')
    // expect(getPassword()).toBe('')
  })

  it('should display request errors if request fails', async () => {
    setUsername('test@gmail.com')
    setPassword('Password12')
    submit()
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1))
    expect(getUsername()).toBe('test@gmail.com')
    expect(getPassword()).toBe('Password12')
    expect(mockAuthActions.login).toBeCalled()
  })
})
