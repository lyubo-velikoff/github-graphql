import { NavLink } from 'react-router-dom'
import ErrorMessage from '../error/error-message'
import Loader from '../loaders/loader'
import { ResultsBoxProps } from './interface'
import NoResults from './no-results'
import UserCard from './user-card'

function ResultsBox({
  data,
  onLoadMore,
  loading,
  error,
  hasNextPage,
}: ResultsBoxProps) {
  const currentReults = data?.length || 0
  return (
    <div className="my-8 box">
      <h1 className="mb-2 font-bold">Search results</h1>
      {loading && <Loader />}
      {currentReults === 0 && <NoResults />}
      {error?.message && <ErrorMessage message={error?.message} />}
      {data?.map(({ id, login, name, avatarUrl }) => (
        <NavLink to={`/users/${login}`} key={id} className="block card link">
          <UserCard name={name || 'Unknown'} avatarUrl={avatarUrl} />
        </NavLink>
      ))}

      {hasNextPage && (
        <div className="mt-4 text-center">
          <button onClick={onLoadMore} className="button">
            Load more
          </button>
        </div>
      )}
    </div>
  )
}

export default ResultsBox
