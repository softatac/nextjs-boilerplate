import style from './Form.module.css'

const FormLabel = ({id, label, required}) => (
  <label className={style.label} htmlFor={id}>
    {label} {required ? '*' : null}
  </label>
)

export default FormLabel
