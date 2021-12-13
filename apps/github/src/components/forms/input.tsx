import { DebounceInput } from 'react-debounce-input'
import { InputProps } from './interface'

function Input({ onChange, value }: InputProps) {
  return (
    <div className="pt-0 mb-3">
      <DebounceInput
        placeholder="Username here..."
        className="input"
        minLength={2}
        debounceTimeout={300}
        value={value}
        onChange={(event) => onChange(event?.target?.value)}
      />
    </div>
  )
}

export default Input
