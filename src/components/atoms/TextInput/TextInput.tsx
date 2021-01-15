import React, {ChangeEvent} from 'react'
import classnames from 'classnames'

import Icon from '@atom/Icon'
import style from './TextInput.module.css'

interface TextInputProps {
  id?: string
  icon?: string
  placeholder?: string
  name?: string
  type?: 'text' | 'email' | 'password' | 'number'
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => unknown
  className?: string
}

const TextInput = (
  {id, icon, name, placeholder, type = 'text', onChange = () => null, className}: TextInputProps,
  ref: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <div className={classnames(style.container, className, 'input-container')}>
      {icon && <Icon name={icon} className={style.icon} />}
      <input
        className={style.input}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
    </div>
  )
}

export default React.forwardRef<HTMLInputElement, TextInputProps>(TextInput)
