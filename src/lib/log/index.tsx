import debug from 'debug'
import {DEV_MODE} from '@config'

debug.enable('so-web*')
export const logger = debug('so-web')

export const useStateLogger = (state, setState, log) => (value) => {
  DEV_MODE && log('%s | %o', 'update', {from: state, to: value})
  return setState(value)
}

export const useDispatchLogger = (state, dispatch, log) => (action) => {
  DEV_MODE && log('%s | %o', 'update', {state, action})
  return dispatch(action)
}
