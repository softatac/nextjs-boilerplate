import React, {useState} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'

import {PublicNavigation} from '@config'
import Logo from '@atom/Logo'
import Button from '@atom/Button'
import Loading from '@atom/Loading'
import MenuItemContainer from '@atom/MenuItem'
import MenuPrimary from '@molecule/MenuPrimary'

import style from './Header.module.css'
import MobileMenuToggle from './MobileMenuToggle'

const topMenuMap = {
  // [UserTypes.ADMINISTRATOR]: AdminNavigation,
  default: PublicNavigation,
}

const Auth = ({isLoggedIn, userData}) => (
  <Button
    variant="bgwhite"
    className="mb-2"
    onClick={isLoggedIn ? () => console.log('@TODO') : () => Router.replace('/login')}
    label={isLoggedIn ? userData?.name : 'Login'}
  />
)

export default function Header({initialized, isLoggedIn, userData, userType}) {
  const [collapsed, setCollapsed] = useState(true)
  const menuItems = topMenuMap[isLoggedIn && userType] ?? topMenuMap.default

  return (
    <nav className={style.nav}>
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href={'/'}>
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <MobileMenuToggle onClick={() => setCollapsed(!collapsed)} />

      <div className={classnames('w-full lg:w-auto lg:h-16 lg:block', collapsed && 'hidden')}>
        <MenuPrimary menu={menuItems} />
        <MenuItemContainer>
          {initialized ? (
            <Auth isLoggedIn={isLoggedIn} userData={userData} />
          ) : (
            <Loading size="small" />
          )}
        </MenuItemContainer>
      </div>
    </nav>
  )
}
