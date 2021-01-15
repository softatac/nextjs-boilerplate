import React from 'react'
import styles from './Modal.module.css'
import {useModal, useModalActions} from '@context/modal'
import Card from '@atom/Card'
import classNames from 'classnames'

const Modal = () => {
  const modalState = useModal()
  const modalActions = useModalActions()

  if (!modalState?.open) return null // @TODO - needs testing

  return (
    <div
      role="modal"
      className={classNames('modal', styles.modalContainer)}
      onClick={(e) => {
        const target = e.target as HTMLDivElement
        target.classList.contains('modal') && modalActions.modalPop()
      }}
    >
      <Card center className={styles.modalContent}>
        {modalState?.content}
      </Card>
    </div>
  )
}

export default Modal
