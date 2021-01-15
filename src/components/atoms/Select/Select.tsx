import React from 'react'
import classnames from 'classnames'
import {SelectOption} from './types'
import style from './Select.module.css'

interface SelectProps {
  name?: string
  id?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value) => unknown
}

const Select = (
  {name = null, id = null, options = [], value: providedValue, onChange = () => null}: SelectProps,
  ref: React.LegacyRef<HTMLSelectElement>
) => {
  const didChange = (event) => {
    return onChange(event.target.value)
  }

  return (
    <select
      className={classnames(style.select, 'input-container')}
      onChange={didChange}
      name={name}
      ref={ref}
      value={providedValue}
      id={id}
    >
      {options.map(({value, label}) => (
        <option className="p-8" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default React.forwardRef<HTMLSelectElement, SelectProps>(Select)
