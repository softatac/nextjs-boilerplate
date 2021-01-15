import React, {useState} from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import style from './Sidebar.module.css'
import {IMenuItem} from '@config'

const sideMenuMap = {
  // [UserTypes.SECRETARY]: SchoolSideNavigation,
}

function MenuItem({label, href, badge, active, notificationCount}: IMenuItem & {active: boolean}) {
  const notifCnt = notificationCount ? notificationCount() : 0

  return (
    <Link href={href}>
      <a className={classnames(style.item, active && style.active)}>
        {badge ? <div className={style.badge}>{badge}</div> : null}
        {label}
        {notifCnt ? <span className={style.notificationCount}>{notifCnt}</span> : null}
      </a>
    </Link>
  )
}

const MenuToggle = ({onClick}) => (
  <div className="block">
    <button className={style.toggle} onClick={onClick}>
      <svg className={style.toggleIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
)

export default function Sidebar({userType, pathname}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <nav className={classnames(style.nav, collapsed && style.collapsed)}>
      <MenuToggle onClick={() => setCollapsed(!collapsed)} />
      {(sideMenuMap[userType] || []).map(({label, href, badge, notificationCount}) => (
        <MenuItem
          key={href + label}
          href={href}
          active={href === pathname}
          badge={badge}
          notificationCount={notificationCount}
          label={collapsed ? label.substr(0, 2) : label}
        />
      ))}
    </nav>
  )
}
