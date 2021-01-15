import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import style from './MenuPrimary.module.css'
import {IMenuItem} from '@config'
import MenuItemContainer from '@atom/MenuItem'

//@TODO fix css in mobile mode for links in menu
interface MenuPrimaryProps {
  menu?: IMenuItem[]
  /** used to highlight current item */
  pathname?: string
}

const MenuItem = ({label, href, badge, active}) => (
  <MenuItemContainer>
    <Link href={href}>
      <a className={classnames(style.item, active && style.active)}>
        {label}
        {badge ? <div className={style.badge}>{badge}</div> : null}
      </a>
    </Link>
  </MenuItemContainer>
)

const MenuPrimary = (props: MenuPrimaryProps) => {
  const {pathname, menu} = props

  return (
    <>
      {menu.map(({label, href, badge}) => (
        <MenuItem
          active={href === pathname}
          badge={badge}
          label={label}
          href={href}
          key={href + label}
        />
      ))}
    </>
  )
}

export default MenuPrimary
