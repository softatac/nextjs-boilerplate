import {useRouter} from 'next/router'
import {useAuth} from '@context/auth'
import Sidebar from './Sidebar'

export default function SidebarContainer() {
  const {data} = useAuth()
  const {pathname} = useRouter()

  return <Sidebar userType={data?.userType} pathname={pathname} />
}
