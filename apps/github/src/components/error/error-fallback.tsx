type ErrorProp = {
  message: string
}

type ErrorFallbackProps = {
  error: ErrorProp
  resetErrorBoundary: () => void
}

function ErrorFallback({ resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <button onClick={resetErrorBoundary}>Reload</button>
    </div>
  )
}

export function myErrorHandler() {
  // Available params error, info
  // Maybe send to sentry
  // E.g. log to an error logging client here
}

export default ErrorFallback
