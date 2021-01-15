import React from 'react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {PublicNavigation, AuthLinks} from '@config/menus'
import MenuPrimary from './MenuPrimary'

export default {
  component: MenuPrimary,
  title: 'Primary Menu',
  decorators: [withKnobs],
}

export const Default = () => <MenuPrimary menu={PublicNavigation} />

export const Nav = () => (
  <nav className="bg-primary-500 flex items-center border-b-4 border-gray-500 w-full justify-between">
    <div className="mr-4">
      <span className="text-3xl text-white"></span>
    </div>
    <MenuPrimary menu={PublicNavigation} pathname={text('page', '/login')} />
    <div className="flex items-center">
      <MenuPrimary menu={AuthLinks} pathname={text('page', '/login')} />
    </div>
  </nav>
)
