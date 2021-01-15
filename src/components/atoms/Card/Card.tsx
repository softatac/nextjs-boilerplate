import React from 'react'
import classnames from 'classnames'

const Card = ({children, className = null, center = null, onClick = null, ...rest}) => (
  <div
    onClick={onClick}
    className={classnames(
      'border rounded-lg border-gray-400 bg-white p-2',
      center && 'flex flex-col justify-center items-center',
      className
    )}
    {...rest}
  >
    {children}
  </div>
)

export default Card
