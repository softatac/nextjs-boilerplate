import {UseFormMethods} from 'react-hook-form'
import {SelectOption} from '../atoms/Select/types'

export interface BasicInputProps {
  id: string
  name: string
  placeholder?: string
  options?: Array<any>
}

export interface ControlledInputProps {
  name: string
  onChange: (any) => any
  value: any
}

export interface InputConfig {
  id: string
  label: string
  name: string
  placeholder?: string
  value?: number
  bind?: Record<string, unknown>
  // @TODO - should only leave available HTML5 <input> types
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox'
  component?: ({}: ControlledInputProps) => React.ReactElement<ControlledInputProps, any>
  options?: SelectOption[]
}

export interface UseInput {
  Label: JSX.Element
  Input: JSX.Element
  Error: JSX.Element
  Control: JSX.Element
  name: string
  label: string
}

export interface FormProps<T> {
  form: UseFormMethods<T>
  onSubmit: (...args) => Promise<void>
  showToggles?: boolean
  children?: any
}
