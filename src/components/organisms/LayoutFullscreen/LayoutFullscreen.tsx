import Header from '@organism/Header'
import Footer from '@molecule/Footer'
import style from './LayoutFullscreen.module.css'
import Modal from '@molecule/Modal'

function LayoutFullscreen({children}) {
  return (
    <div className={style.wrapper}>
      <Modal />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutFullscreen
