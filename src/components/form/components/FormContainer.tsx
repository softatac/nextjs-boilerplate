import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import useInput from './useInput'

export default function FormContainer({
  render: Form,
  callback,
  defaultValues = {},
  inputs: providedInputs = null,
  ...rest
}) {
  const form = useForm({defaultValues: {api: null, ...defaultValues}})
  const {handleSubmit, clearErrors, setError} = form

  const onSubmit = useCallback((variables) => {
    const result = callback(variables)
    result?.catch((err) => setError('api', {type: 'manual', message: err.message}))
    // @todo should return?
    // return result
  }, [])

  const inputs = (providedInputs || Object.values(Form.Config)).map(useInput(form))

  return (
    <Form
      {...rest}
      form={form}
      inputs={inputs}
      onSubmit={(...args) => {
        clearErrors('api') // clear global errors
        return handleSubmit(onSubmit)(...args)
      }}
    />
  )
}
