import Router from 'next/router'
import {useState, createContext, useContext, useEffect} from 'react'

import * as UserTypes from '@config/enums/user-types'
import {toastError} from '@lib/toast'

import createAuthActions from './actions'
import {IProvideAuthState, IProvideAuthActions, IProvideAuth} from './types'
import {AuthState} from './state'

function useAuthRedirect(authState: IProvideAuthState) {
  useEffect(() => {
    const {userType} = authState
    if (!userType) return
    if (Router.pathname.indexOf('/login') === -1) return

    switch (userType) {
      case UserTypes.ADMINISTRATOR:
        Router.replace('/admin')
        break
      default:
        toastError(`Unknown user type: ${userType}`)
    }
  }, [authState?.userType])
}

const authContext = createContext<IProvideAuthState>(AuthState.Uninitialized())
const authActionsContext = createContext<IProvideAuthActions>(null)

export const useAuth = () => useContext(authContext)
export const useAuthActions = () => useContext(authActionsContext)

export function useProvideAuth(initial: IProvideAuthState): IProvideAuth {
  const [state, setState] = useState(initial)
  const actions = createAuthActions(setState)

  return {state, actions}
}

export default function ProvideAuth({children, initialValue = AuthState.Uninitialized()}) {
  const {state, actions} = useProvideAuth(initialValue)

  // attempt to re-check login status
  useEffect(() => {
    if (!state.initialized) actions.refreshLogin()
  }, [])

  useAuthRedirect(state)

  return (
    <authContext.Provider value={state}>
      <authActionsContext.Provider value={actions}>{children}</authActionsContext.Provider>
    </authContext.Provider>
  )
}
