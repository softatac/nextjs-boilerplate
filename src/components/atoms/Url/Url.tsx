import classnames from 'classnames'
import {EMAIL_CONTACT} from '@config'
type UrlProps = {
  href: string
  children: unknown
  external?: boolean
  className?: string
  pre?: string
  noStyle?: boolean
}
export default function Url({
  href,
  children,
  className,
  noStyle = false,
  pre = null,
  external = false,
  ...rest
}: UrlProps) {
  return (
    <>
      {pre}
      <a
        href={href}
        target={external ? '_blank' : null}
        rel={external ? 'noreferrer' : null}
        className={classnames(!noStyle && 'link', className)}
        {...rest}
      >
        {children}
      </a>
    </>
  )
}
export function ContactEmail({pre}: {pre?: string}) {
  return (
    <Url
      noStyle
      className="text-blue-600 hover:text-blue-800"
      href={`mailto:${EMAIL_CONTACT}`}
      pre={pre || null}
    >
      {EMAIL_CONTACT}
    </Url>
  )
}
