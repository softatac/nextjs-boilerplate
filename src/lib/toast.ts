import {toast} from 'react-toastify'

export function getErrorText(error) {
  if (typeof error === 'string') return error

  return error?.message ?? error?.context?.request?.statusText ?? 'Eroare necunoscută'
}

export function toastError(error) {
  return toast(getErrorText(error), {
    autoClose: 5 * 1000,
    type: 'error',
  })
}

export function toastSuccess(message, options = null) {
  return toast(message, {
    autoClose: 10 * 1000,
    type: 'success',
    ...options,
  })
}
