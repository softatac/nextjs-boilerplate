import React from 'react'

export default function DateTimeFormat({children}) {
  const options = {
    day: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  const text = new Intl.DateTimeFormat('ro-RO', options).format(new Date(children))

  return <>{text}</>
}
