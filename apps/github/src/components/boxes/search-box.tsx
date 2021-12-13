import Input from '../forms/input'
import { SearchBoxProps } from './interface'

function SearchBox({ onChange, value }: SearchBoxProps) {
  return (
    <div className="my-4 box">
      <h1 className="mb-2 font-bold">Search users</h1>
      <Input onChange={onChange} value={value} />
    </div>
  )
}

export default SearchBox
