import * as icons from '@assets/icons'
import * as imgs from '@assets/images'

function Icon({name, ...rest}) {
  if (icons[name]) {
    const SvgIcon = icons[name]
    return <SvgIcon {...rest} />
  }

  if (!Object.values(imgs).includes(name)) {
    console.error(`Image not found: ${name}`)
  }

  return <img src={name} {...rest} />
}

export default Icon
