export default function createModalActions(modal, setModal) {
  const modalPush = (content) => {
    setModal({
      open: true,
      content,
    })
  }
  const modalPop = () => {
    setModal({
      open: false,
      content: modal.content,
    })
  }

  return {modalPush, modalPop}
}
