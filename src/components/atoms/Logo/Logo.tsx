export default function Logo() {
  return (
    <div className="flex items-center">
      <img key="logo" className="cursor-pointer h-12 m-2" src="/images/brand/logo.png" alt="Logo" />
      <img
        key="text"
        className="cursor-pointer h-12 m-2"
        src="/images/brand/logo-text.svg"
        alt="Logo text"
      />
    </div>
  )
}
