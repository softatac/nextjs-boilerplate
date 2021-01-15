export interface IProvideModalState {
  open: boolean
  content: JSX.Element
}

export interface IProvideModalActions {
  modalPush: (content: JSX.Element | string) => void
  modalPop: () => void
}
