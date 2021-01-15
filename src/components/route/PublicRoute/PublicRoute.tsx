import React from 'react'

interface PublicRouteProps {
  render: React.FC
}

const PublicRoute = ({render: Component, ...rest}: PublicRouteProps) => {
  return <Component {...rest} />
}

export default PublicRoute
