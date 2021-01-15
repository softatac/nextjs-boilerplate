import Button from '@atom/Button'
import ErrorMessage from '@atom/ErrorMessage'
import Loading from '@atom/Loading'

/**
 * Show a loading indicator or error message for useGet / useSwr
 *
 * Example usage: ```tsx
 *   const {data, error} = useStudents()
 *   return RequestLoader({date, error}) || <>{data.name}</a>
 * ```
 */
export default function RequestLoader({
  data,
  error,
  refresh,
}: {
  data?: unknown
  error?: unknown
  refresh?: () => unknown
  children?: any
}) {
  if (data) return null

  return (
    <>
      {!data && <Loading />}
      <ErrorMessage error={error} />
      {error && <Button onClick={refresh}>Încearcă din nou</Button>}
    </>
  )
}
