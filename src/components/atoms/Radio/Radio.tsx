import React from 'react'
import classNames from 'classnames'

interface RadioProps {
  name?: string
  className?: string
  id?: string
  label?: string
  value: string
  onChange?: (value) => unknown
}

const Radio = (
  {
    name = null,
    id = null,
    label = null,
    className = null,
    value: providedValue,
    onChange = () => null,
  }: RadioProps,
  ref: React.LegacyRef<HTMLInputElement>
) => {
  const didChange = (event) => {
    return onChange(event.target.value)
  }
  return (
    <div className="flex my-1">
      <input
        className={classNames('mr-2', className)}
        type="radio"
        name={name}
        ref={ref}
        onChange={didChange}
        id={id}
        value={providedValue}
      />
      {label}
    </div>
  )
}
export default React.forwardRef<HTMLInputElement, RadioProps>(Radio)
