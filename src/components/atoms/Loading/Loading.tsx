import classnames from 'classnames'
import style from './Loading.module.css'

type LoadingProps = {
  size?: 'small' | 'medium' | 'large'
}

export default function Loading({size = 'medium'}: LoadingProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={classnames(style.loading, style[size])} />
    </div>
  )
}
