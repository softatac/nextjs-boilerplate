export const isSubset = (requiredRoles: Array<string>, currentRoles: Array<string>) => {
  if (!requiredRoles || !requiredRoles.length) return true

  let allFound = true
  requiredRoles.forEach((requiredRole) =>
    currentRoles.indexOf(requiredRole) === -1 ? (allFound = false) : null
  )
  return allFound
}
