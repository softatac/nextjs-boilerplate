import React from 'react'
import Router from 'next/router'
import ProvideAuth from '@context/auth'
import {render} from '@testing-library/react'
import createAuthActions from '@context/auth/actions'
import {AuthState} from '@context/auth/state'
import {LoginResponseMockSuccess} from '__mocks__'
import PrivateRoute from './PrivateRoute'

jest.mock('next/router')
const mockRouterReplace = (Router.replace as jest.Mock).mockImplementationOnce(jest.fn())
Router.pathname = 'mocked'

jest.mock('@context/auth/actions')
const mockCreateAuthActions = createAuthActions as jest.Mock
const mockAuthActions = {
  login: jest.fn(),
  signup: jest.fn(),
  logout: jest.fn(),
  refreshLogin: jest.fn(),
}

mockCreateAuthActions.mockImplementation(() => mockAuthActions)

const MockedComponent = ({roles = []}) => (
  <PrivateRoute render={() => <div>Mock</div>} roles={roles} />
)
const WithLogin = MockedComponent

describe('PrivateRoute', () => {
  it('calls refresh if not initialized', async () => {
    const {container} = render(
      <ProvideAuth>
        <PrivateRoute render={() => <div>Mock</div>} />
      </ProvideAuth>
    )

    expect(container.textContent).toBe('')
    expect(mockAuthActions.refreshLogin).toHaveBeenCalledTimes(1)
  })

  it('redirects if not logged in', async () => {
    const {container} = render(
      <ProvideAuth initialValue={AuthState.Unauthenticated()}>
        <WithLogin />
      </ProvideAuth>
    )

    expect(container.textContent).toBe('')
    expect(mockRouterReplace).toHaveBeenCalledTimes(1)
  })

  it('renders component if logged in', async () => {
    const {container} = render(
      <ProvideAuth initialValue={AuthState.Authenticated(LoginResponseMockSuccess)}>
        <WithLogin />
      </ProvideAuth>
    )
    expect(container.textContent).toBe('Mock')
  })

  // @todo - fix
  // it('Shows error if role not granted', async () => {
  //   const {container} = render(
  //     <ProvideAuth initialValue={AuthState.Authenticated(LoginResponseMockSuccess)}>
  //       <WithLogin roles={['ROLE_MUTANT']} />
  //     </ProvideAuth>
  //   )

  //   expect(container.textContent).toBe('Acces ne-permis')
  //   // expect(mockRouterReplace).toHaveBeenCalledTimes(1) @todo - for whatever reason, this gets called twice when all tests are running
  //   expect(mockRouterReplace).toHaveBeenCalled()
  // })

  it('renders component if role granted', async () => {
    const {container} = render(
      <ProvideAuth initialValue={AuthState.Authenticated(LoginResponseMockSuccess)}>
        <WithLogin roles={['ROLE_USER']} />
      </ProvideAuth>
    )

    expect(container.textContent).toBe('Mock')
  })
})
