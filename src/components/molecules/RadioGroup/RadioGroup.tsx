import React from 'react'
import {SelectOption} from '@atom/Select/types'
import Radio from '@atom/Radio/Radio'

interface RadioGroupProps {
  name?: string
  id?: string
  label?: string
  options?: SelectOption[]
  onChange?: (value) => unknown
}

const RadioGroup = (
  {name = null, id = null, options = [], onChange = () => null}: RadioGroupProps,
  ref
) => {
  return (
    <div className="flex flex-col text-left">
      {options.map((option) => (
        <Radio
          key={option.value}
          className="mr-2"
          name={name}
          onChange={onChange}
          id={id}
          value={option.value}
          label={option.label}
          ref={ref}
        />
      ))}
    </div>
  )
}
export default React.forwardRef<JSX.Element, RadioGroupProps>(RadioGroup)
