import { useLazyQuery } from '@apollo/client'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RepositoryBox from '../../components/boxes/repository-box'
import UserCard from '../../components/boxes/user-card'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs'
import ErrorMessage from '../../components/error/error-message'
import Loader from '../../components/loaders/loader'
import { REPOSITORY_OWNER_QUERY } from '../../utils/api'

function UserPage() {
  const { userId } = useParams()
  const [getUser, { data, error, loading }] = useLazyQuery(
    REPOSITORY_OWNER_QUERY
  )

  // When page loads, get user metadata
  useEffect(() => {
    getUser({ variables: { login: userId } })
  }, [getUser, userId])

  // Set up some helper vars to use
  const repositoryOwner = data?.repositoryOwner || {}
  const { name, avatarUrl, repositories } = repositoryOwner || {}
  const edges = repositories?.edges?.map((edge: any) => edge.node)

  return (
    <div>
      <Breadcrumbs value={userId || ''} />

      {loading && <Loader />}
      {error?.message && <ErrorMessage message={error?.message} />}

      <div className="inline-block card">
        <UserCard name={name} avatarUrl={avatarUrl} />
      </div>

      <RepositoryBox data={edges} />
    </div>
  )
}

export default UserPage
