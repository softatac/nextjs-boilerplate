import style from './Header.module.css'

export default function MobileMenuToggle({onClick}) {
  return (
    <div className="block lg:hidden">
      <button className={style.toggle} onClick={onClick}>
        <svg className={style.toggleIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  )
}
