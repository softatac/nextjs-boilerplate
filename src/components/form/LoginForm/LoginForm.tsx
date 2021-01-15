import {ErrorMessage} from '@hookform/error-message'
import Button from '@atom/Button'
import FormError from '@atom/FormError'
import * as Config from './config'

export default function LoginForm({
  inputs,
  onSubmit,
  form: {
    errors,
    formState: {isSubmitting},
  },
}: Config.LoginFormProps) {
  return (
    <form
      className="rounded-lg p-8 my-5 bg-gradient-to-t from-blue-700 to-blue-500"
      onSubmit={onSubmit}
    >
      <h1 className="text-4xl text-center text-white mb-8">Bun venit</h1>
      <section className="mb-4">
        <ErrorMessage errors={errors} name="api" render={FormError} />
      </section>

      {inputs.map((input) => (
        <div className="my-4" key={input.name}>
          {input.Control}
        </div>
      ))}

      <div className="flex items-center justify-center mt-8">
        <Button type="submit" disabled={isSubmitting} label="Login" />
      </div>
    </form>
  )
}

LoginForm.Config = Config
