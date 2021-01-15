import {toastError, toastSuccess} from '@lib/toast'

export function handleApiResponse(
  callback,
  {successMessage = null, success = null, error = null} = {}
) {
  return callback
    .then(() => {
      toastSuccess(successMessage || 'Datele au fost salvate cu success')
      if (typeof success === 'function') success()
    })
    .catch((err) => {
      toastError(err)
      if (typeof error === 'function') error(err)
      throw err
    })
}

export function mapArrayInputs(inputs) {
  return inputs.reduce((acc, input) => {
    acc[input.name] = input
    return acc
  }, {})
}
