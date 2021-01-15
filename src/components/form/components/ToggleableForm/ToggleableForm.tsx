import {useCallback, useState} from 'react'
import classnames from 'classnames'
import FormToggles from '../FormToggles'

import style from './ToggleableForm.module.css'
import {FormProps} from '@form/types'

export default function ToggleableForm({
  onSubmit,
  form,
  showToggles = false,
  children = null,
}: FormProps<any>) {
  const [edit, setEdit] = useState(false)
  const doSubmit = useCallback((...args) => {
    setEdit(false)
    return onSubmit(...args).catch(() => setEdit(true))
  }, [])

  return (
    <form onSubmit={doSubmit} className={classnames(style.container, !edit && 'disabled')}>
      <fieldset disabled={!edit}>{children}</fieldset>
      {showToggles && <FormToggles edit={edit} setEdit={setEdit} form={form} />}
    </form>
  )
}
