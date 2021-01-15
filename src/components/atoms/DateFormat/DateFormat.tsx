import React from 'react'

function leadZeros(number) {
  if (number < 10) return `0${number}`
  return number
}

export default function DateFormat({
  children,
  date,
}: {
  children?: Date | string
  date?: Date | string
}) {
  const value = date || children
  if (!value) return <>Invalid</>

  // const text = new Intl.DateTimeFormat('ro-RO').format(new Date(value))
  const d = new Date(value)
  const text = `${leadZeros(d.getDate())}.${leadZeros(d.getMonth() + 1)}.${d.getFullYear()}`

  return <>{text}</>
}
