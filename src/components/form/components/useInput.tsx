import {ErrorMessage} from '@hookform/error-message'
import {UseInput, InputConfig} from '../types'
import TextInput from '@atom/TextInput'
import Select from '@atom/Select'
import FormLabel from '@atom/FormLabel'
import FormError from '@atom/FormError'
import TextArea from '@atom/TextArea'
import RadioGroup from '@molecule/RadioGroup'
import Checkbox from '@atom/Checkbox'
import {Controller} from 'react-hook-form'

function createInput(config: InputConfig, ref, {control}) {
  const {type, id, placeholder, name, options, label, value, component: Component} = config

  if (Component) return <Controller render={Component} name={name} control={control} />

  switch (type) {
    case 'radio':
      return <RadioGroup name={name} label={label} options={options} id={id} ref={ref} />
    case 'checkbox':
      return <Checkbox id={id} name={name} ref={ref} />
    case 'select':
      return <Select name={name} id={id} options={options} ref={ref} />
    case 'textarea':
      return <TextArea placeholder={placeholder} value={value} name={name} id={id} ref={ref} />

    default:
      return <TextInput id={id} type={type} name={name} placeholder={placeholder} ref={ref} />
  }
}

// creates components specific to a text input
const useInput = (form) => (config: InputConfig): UseInput => {
  const {register, errors} = form
  const {id, label, name, bind} = config
  const ref = register(bind)

  const Label = <FormLabel id={id} label={label} required={bind?.required} />
  const Input = createInput(config, ref, form)
  const Error = <ErrorMessage errors={errors} name={name} render={FormError} />

  const Control = (
    <>
      {Label}
      {Input}
      {Error}
    </>
  )

  return {
    Label,
    Input,
    Error,
    Control,
    name,
    label,
  }
}

export default useInput
