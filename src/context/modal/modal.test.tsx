import React from 'react'
import {useModalActions} from '@context/modal'
import {screen, render, waitFor, fireEvent} from '@testing-library/react'
import ProvideModal from './modal'
import Modal from '@molecule/Modal'

const OpenModalButton = ({content = null}) => {
  const modalActions = useModalActions()
  return <button onClick={() => modalActions.modalPush(content)}>Open Modal</button>
}

describe('Modal', () => {
  it('renders modal Closed', () => {
    const mockState = {open: false, content: null}
    render(
      <ProvideModal value={mockState}>
        <Modal />
      </ProvideModal>
    )
    expect(screen.queryAllByRole('modal')).toHaveLength(0)
  })

  it('renders modal Open and closes on click', async () => {
    const mockState = {open: true, content: null}
    render(
      <ProvideModal value={mockState}>
        <Modal />
      </ProvideModal>
    )
    expect(screen.queryAllByRole('modal')).toHaveLength(1)
    await fireEvent.click(screen.getByRole('modal'))
    waitFor(() => expect(screen.queryAllByRole('modal')).toHaveLength(0))
  })

  it('modal opens', async () => {
    const mockState = {open: false, content: null}
    render(
      <ProvideModal value={mockState}>
        <Modal />
        <OpenModalButton content="TestMe" />
      </ProvideModal>
    )
    expect(screen.queryAllByRole('modal')).toHaveLength(0)
    fireEvent.click(screen.getByRole('button'))
    waitFor(() => expect(screen.queryAllByRole('modal')).toHaveLength(1))
  })

  it('modal shows Content', async () => {
    const mockState = {open: true, content: <div role="test">test</div>}
    render(
      <ProvideModal value={mockState}>
        <Modal />
      </ProvideModal>
    )
    expect(screen.queryAllByRole('modal')).toHaveLength(1)
    waitFor(() => expect(screen.queryAllByRole('test')).toHaveLength(1))
  })
})
