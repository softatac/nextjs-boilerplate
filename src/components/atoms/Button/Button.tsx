import React from 'react'
import classNames from 'classnames'

import style from './Button.module.css'
import Icon from '@atom/Icon'

export interface ButtonProps {
  className?: string
  label?: string
  children?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: 'facebook' | 'google' | 'coin' | 'refresh' | ''
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'clear'
    | 'darker'
    | 'bgwhite'
    | 'green'
  size?: 'sm' | 'md' | 'lg'

  /**
   * Action handler
   * @param e MouseEvent
   */
  onClick?: (e) => void
}

export default function Button({
  className,
  label,
  variant = 'default',
  size = 'md',
  type = 'button',
  disabled = false,
  icon,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classNames(style.button, style[variant], style[size], className)}
    >
      {icon && <Icon name={icon} className={style.icon} />}
      {(label || children) && <span className={style.label}>{label || children}</span>}
    </button>
  )
}
