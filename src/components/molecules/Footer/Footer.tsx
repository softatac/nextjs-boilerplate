import React from 'react'
import Link from 'next/link'
import {FooterLinks} from '@config'
import Logo from '@atom/Logo'
import style from './Footer.module.css'
import LinkWithIcon from '@molecule/LinkWithIcon'

export default function Footer() {
  const items: JSX.Element[] = FooterLinks.map((item) => (
    <Link href={item.href} key={item.label}>
      <a className="mx-4 my-1">{item.label}</a>
    </Link>
  ))

  return (
    <div className={style.container}>
      <Logo />
      <div className="flex mt-8">
        <LinkWithIcon name="facebook" url="https://www.facebook.com/soferonline" />
        <LinkWithIcon name="instagram" url="https://www.instagram.com/soferonline.ro" />
      </div>
      <div className="flex p-5 flex-col sm:flex-row">{items}</div>
      <span className={style.legal}>
        &copy; 2020 SoferOnline | &reg; Toate drepturile rezervate.
      </span>
    </div>
  )
}
