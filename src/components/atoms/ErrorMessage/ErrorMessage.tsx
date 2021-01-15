// @TODO remove, use Error
export default function ErrorMessage({error = null, children = null}) {
  return (
    <div>
      error: <pre>{JSON.stringify(error || children)}</pre>
    </div>
  )
}
