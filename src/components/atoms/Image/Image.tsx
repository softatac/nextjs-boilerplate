import classnames from 'classnames'

export default function Image({
  src,
  alt,
  width = null,
  height = null,
  className = '',
  force = false,
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  force?: boolean
}) {
  // @todo - use next/image for optimisation
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classnames('object-cover', className)}
      style={force ? {height, width} : null}
    />
  )
}
