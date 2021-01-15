import React from 'react'
import classnames from 'classnames'
import ro from 'date-fns/locale/ro'
import 'datejs'
import ReactDatePicker, {registerLocale} from 'react-datepicker'

import styles from './DatePicker.module.css'

registerLocale('ro', ro)

interface DatePickerProps {
  value?: Date | string
  onChange: (date: Date) => void
  name?: string
}

const DatePicker = ({value, onChange, name}: DatePickerProps) => {
  if (typeof value === 'string') value = new Date(value)

  return (
    <ReactDatePicker
      id={name}
      dateFormat="dd MM yyyy"
      className={classnames(styles.datepicker, 'input-container')}
      popperPlacement="auto-bottom"
      locale="ro"
      selected={value}
      onChange={onChange}
    />
  )
}

export default DatePicker
