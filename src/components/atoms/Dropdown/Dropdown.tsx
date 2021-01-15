import {useState, useCallback} from 'react'
import classnames from 'classnames'
import Option from './Option'
import style from './Dropdown.module.css'

interface Option {
  label: string
  value: any
}

interface DropdownProps {
  options: Option[]
  selected: Option
  onChange: (option: Option) => void
}
//@TODO Click outside closes expanded
//@TODO Opening Dropdown automatic scroll to currently selected county

export default function Dropdown({options, selected: {value, label}, onChange}: DropdownProps) {
  const [expanded, setExpanded] = useState(false)

  const onClick = useCallback(
    (option) => {
      setExpanded(!expanded)
      expanded && onChange(option)
    },
    [expanded]
  )
  return (
    <div className={classnames(style.root, expanded && style.rootExpanded)}>
      <Option name={label} onClick={() => onClick({value, label})} />
      {expanded && (
        <div className={style.optionsContainer}>
          {options.map(({value, label}) => (
            <Option
              className={expanded ? style.optionExpanded : null}
              key={value}
              name={label}
              onClick={() => onClick({value, label})}
            />
          ))}
        </div>
      )}
    </div>
  )
}
