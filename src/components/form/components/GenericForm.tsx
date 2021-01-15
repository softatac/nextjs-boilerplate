import Button from '@atom/Button'
import {ErrorMessage} from '@hookform/error-message'
import FormError from '@atom/FormError'

export default function GenericForm({
  title = null,
  submitLabel,
  inputs,
  onSubmit,
  form: {
    errors,
    formState: {isSubmitting},
  },
}) {
  return (
    <form onSubmit={onSubmit}>
      {title && <h1 className="text-primary-500 text-2xl text-center">{title}</h1>}

      <section>
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>

      <section className="mb-8">
        {inputs.map((input) => (
          <div key={input.name}>{input.Control}</div>
        ))}
      </section>

      <Button disabled={isSubmitting} label={submitLabel} type="submit" />
    </form>
  )
}
