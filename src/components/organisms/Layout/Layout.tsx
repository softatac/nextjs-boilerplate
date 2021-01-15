import Header from '@organism/Header'
import Footer from '@molecule/Footer'
import style from './Layout.module.css'
import Modal from '@molecule/Modal'

function Layout({children}) {
  return (
    <div className={style.wrapper}>
      <Modal />
      <Header />
      <main className="container flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
