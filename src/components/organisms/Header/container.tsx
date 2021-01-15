import Header from './Header'
import {useAuth} from '@context/auth'

export default function HeaderContainer() {
  const {initialized, isLoggedIn, data} = useAuth()
  // const {logout} = useAuthActions()

  return (
    <Header
      initialized={initialized}
      isLoggedIn={isLoggedIn}
      userData={data?.user}
      userType={data?.userType}
    />
  )
}
