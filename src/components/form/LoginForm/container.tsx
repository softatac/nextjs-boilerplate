import {useCallback} from 'react'
import {useAuthActions} from '@context/auth'
import {TLoginRequestData} from '@lib/api/types/auth'

import FormContainer from '../components/FormContainer'
import LoginForm from './LoginForm'

export default function LoginFormContainer() {
  const {login} = useAuthActions()

  const callback = useCallback(
    ({username, password}: TLoginRequestData) => login(username, password),
    []
  )

  return <FormContainer render={LoginForm} callback={callback} />
}
