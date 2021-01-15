import Link from 'next/link'
import Icon from '@atom/Icon'
import style from './LinkWithIcon.module.css'
import classNames from 'classnames'

type TLinkWithIconProps = {
  iconSize?: 'sm' | 'md' | 'lg'
  className?: string
  name: string
  url: string
  children?: string
  targetBlank?: boolean
}
export default function LinkWithIcon({
  className,
  iconSize = 'md',
  name,
  url,
  children,
  targetBlank = false,
}: TLinkWithIconProps) {
  return (
    <Link href={url}>
      <a
        className={classNames('flex items-center w-full outline-none', className)}
        target={targetBlank ? '_blank' : null}
      >
        <Icon name={name} className={classNames(style.icon, style[iconSize])} />
        {children && <p className="w-1/2 sm:w-auto">{children}</p>}
      </a>
    </Link>
  )
}
