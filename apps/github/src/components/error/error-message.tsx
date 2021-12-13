import { ErrorMessageProps } from './interface'

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-4">
      <p className="font-bold">Error</p>
      {message}
    </div>
  )
}

export default ErrorMessage
