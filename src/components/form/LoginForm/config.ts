import {TLoginRequestData} from '@lib/api/types/auth'
import {FormProps, UseInput, InputConfig} from '../types'

export interface LoginFormValues extends TLoginRequestData {
  api: string
}

export interface LoginFormProps extends FormProps<LoginFormValues> {
  inputs: UseInput[]
}

export const UsernameConfig: InputConfig = {
  label: 'utilizator',
  placeholder: 'nume_utilizator',
  type: 'text',
  name: 'username',
  id: 'username',
  bind: {
    required: 'Numele de utilizator e necesar',
    minLength: {
      value: 3,
      message: 'Numele de utiliaztor invalid',
    },
  },
}

export const PasswordConfig: InputConfig = {
  label: 'parola',
  placeholder: 'parola',
  type: 'password',
  name: 'password',
  id: 'password',
  bind: {
    required: 'Parola e necesară.',
    minLength: {
      value: 3,
      message: 'Parola invalidă',
    },
  },
}
