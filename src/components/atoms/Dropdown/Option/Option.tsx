import style from '../Dropdown.module.css'
import classNames from 'classnames'

interface OptionProps {
  name: string
  onClick(): void
  className?: string
}

export default function Option({name, onClick, className}: OptionProps) {
  return (
    <button className={classNames(style.option, className)} onClick={onClick}>
      {name}
    </button>
  )
}
