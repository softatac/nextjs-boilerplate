import Header from '@organism/Header'
import Sidebar from '@molecule/Sidebar'
import style from './LayoutSidebar.module.css'

function LayoutSidebar({children}) {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main className={style.container}>{children}</main>
      </div>
    </>
  )
}

export default LayoutSidebar
