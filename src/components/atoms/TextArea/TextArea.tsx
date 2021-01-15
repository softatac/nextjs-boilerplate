import React from 'react'
import classnames from 'classnames'
import styles from './TextArea.module.css'

interface TextAreaProps {
  name?: string
  id?: string
  placeholder?: string
  value?: string | number
  onChange?: (value) => unknown
}

const TextArea = (
  {name = null, id = null, placeholder = null, value, onChange = () => null}: TextAreaProps,
  ref: React.LegacyRef<HTMLTextAreaElement>
) => {
  const didChange = (event) => {
    return onChange(event.target.value)
  }
  return (
    <textarea
      className={classnames(styles.textArea, 'input-container')}
      name={name}
      onChange={didChange}
      placeholder={placeholder}
      id={id}
      ref={ref}
    >
      {value}
    </textarea>
  )
}
export default React.forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea)
