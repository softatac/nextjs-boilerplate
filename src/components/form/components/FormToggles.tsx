import {ErrorMessage} from '@hookform/error-message'
import Button from '@atom/Button'
import FormError from '@atom/FormError'
import Loading from '@atom/Loading'

export default function FormToggles({
  form: {
    errors,
    formState: {isSubmitting},
    reset,
  },
  edit,
  setEdit,
}) {
  return (
    <div className="absolute bottom-0 right-0 m-1 flex">
      <ErrorMessage errors={errors} name="api" render={FormError} />

      {isSubmitting ? (
        <Loading size="small" />
      ) : !edit ? (
        <Button onClick={() => setEdit(true)} label="✏️ Modifică" />
      ) : (
        <>
          <Button
            label="Anulează"
            variant="clear"
            type="button"
            className="mr-2"
            onClick={() => [reset(), setEdit(false)]}
          />
          <Button label="Salvează" type="submit" />
        </>
      )}
    </div>
  )
}
