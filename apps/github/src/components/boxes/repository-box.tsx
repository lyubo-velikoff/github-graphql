import { Repository } from '../../pages/users/interface'
import { RepositoryBoxProps } from './interface'

function RepositoryBox({ data }: RepositoryBoxProps) {
  return (
    <div className="my-4 box">
      <h1 className="mb-2 font-bold">Repositories</h1>
      <ul>
        {data?.map(({ name, url }: Repository, index: number) => (
          <li key={index}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="block p-4 hover:bg-gray-200 hover:underline"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepositoryBox
