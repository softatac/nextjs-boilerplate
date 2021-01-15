export interface IMenuItem {
  href: string
  label?: string
  icon?: string
  badge?: string
  notificationCount?: () => number
}

export const PublicNavigation: IMenuItem[] = [
  {
    label: 'Acasă',
    href: '/',
  },
]

export const AuthLinks: IMenuItem[] = [
  {
    label: 'Intră în cont',
    href: '/login',
  },
]

export const FooterLinks = []
