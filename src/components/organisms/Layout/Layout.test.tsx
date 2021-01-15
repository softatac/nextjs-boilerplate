import React from 'react'
import Layout from './Layout'
import ProvideAuth from '@context/auth'
import {LoginResponseMockSuccess} from '__mocks__'
import {render} from '@testing-library/react'
import {AuthState} from '@context/auth/state'

jest.mock('next/link', () => {
  return ({children}) => {
    return children
  }
})

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '<pathname>',
  }),
  pathname: 'mocked',
}))

describe('Layout', () => {
  it('renders correctly when logged out', () => {
    const {container} = render(
      <ProvideAuth initialValue={AuthState.Unauthenticated()}>
        <Layout>__Mock__Layout__</Layout>
      </ProvideAuth>
    )
    expect(container.textContent).not.toContain('chestionar')
    expect(container.textContent).toContain('__Mock__Layout__')
    expect(container.textContent).toContain('Login')
  })

  it('renders correctly when logged in', () => {
    const {container} = render(
      <ProvideAuth initialValue={AuthState.Authenticated(LoginResponseMockSuccess)}>
        <Layout>__Mock__Layout__</Layout>
      </ProvideAuth>
    )
    expect(container.textContent).toContain('__Mock__Layout__')
    expect(container.textContent).toContain('test')
  })
})
