import React, {useEffect} from 'react'
import Router from 'next/router'
import {useAuth} from '@context/auth'
import Loading from '@atom/Loading'
import {isSubset} from '@lib/sets'

interface PrivateRouteProps {
  render: React.FC | any
  /** component to display if the user is not logged in */
  fallback?: React.FC
  roles?: Array<string>
}

const DefaultFallback = ({accessDenied}) => (
  <div className="w-full h-full text-center">
    {accessDenied && <h1>Acces ne-permis</h1>}
    <Loading size="large" />
  </div>
)

const PrivateRoute = ({
  render: Component,
  fallback,
  roles: requiredRoles,
  ...rest
}: PrivateRouteProps) => {
  const {initialized, isLoggedIn, roles} = useAuth()
  const Fallback = fallback || DefaultFallback

  const hasAccess = isSubset(requiredRoles, roles)

  // redirect to login if not loggedIn or does not have required roles
  useEffect(() => {
    if (initialized && !isLoggedIn) Router.replace('/login')
  }, [initialized, isLoggedIn, roles])

  return initialized && isLoggedIn && hasAccess ? (
    <Component {...rest} />
  ) : (
    <Fallback accessDenied={initialized && !hasAccess} />
  )
}

export default PrivateRoute
