import React from 'react'
import classNames from 'classnames'

interface CheckboxProps {
  name?: string
  className?: string
  id?: string
  label?: string
  value?: string | number
  onChange?: (value) => unknown
}

const Checkbox = (
  {
    name = null,
    id = null,
    label = null,
    className = null,
    value: providedValue,
    onChange = () => null,
  }: CheckboxProps,
  ref: React.LegacyRef<HTMLInputElement>
) => {
  const didChange = (event) => {
    return onChange(event.target.value)
  }
  return (
    <div className="flex flex-row my-1">
      {label}
      <input
        className={classNames('mr-2', className)}
        type="checkbox"
        name={name}
        ref={ref}
        onChange={didChange}
        id={id}
        value={providedValue}
      />
    </div>
  )
}
export default React.forwardRef<HTMLInputElement, CheckboxProps>(Checkbox)
