import {useState, createContext, useContext} from 'react'
import {IProvideModalState, IProvideModalActions} from './types'
import createModalActions from './actions'

const modalContext = createContext<IProvideModalState>(null)
const modalActionsContext = createContext<IProvideModalActions>(null)

export const useModal = () => useContext(modalContext)
export const useModalActions = () => useContext(modalActionsContext)

export function useProvideModal(initial) {
  const [modal, setModal] = useState(initial)

  const actions = createModalActions(modal, setModal)

  return {modal, actions}
}

export default function ProvideModal({children, value = {open: false, content: null}}) {
  const {modal, actions} = useProvideModal(value)

  return (
    <modalContext.Provider value={modal}>
      <modalActionsContext.Provider value={actions}>{children}</modalActionsContext.Provider>
    </modalContext.Provider>
  )
}
