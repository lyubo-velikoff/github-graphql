import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { SEARCH_QUERY } from '../utils/api'
import ResultsBox from '../components/boxes/results-box'
import SearchBox from '../components/boxes/search-box'
import { useQueryStrings } from '../utils/random'

function GithubPage() {
  const navigate = useNavigate()
  const urlParams = useQueryStrings()
  const [query, setQuery] = useState('')

  // Queries
  const [searchUsers, { loading, error, data, fetchMore }] =
    useLazyQuery(SEARCH_QUERY)

  //  When page loads, make sure to set the value of the input based of the url parameter
  useEffect(() => {
    setQuery(urlParams.get('query') || '')
  }, [setQuery, urlParams])

  // Fetch users whenever query state changes
  useEffect(() => {
    searchUsers({ variables: { numOfResults: 5, query } })
  }, [searchUsers, query])

  // When debounce is done, set the state of the input and update the url params to match the value
  const handleQueryChange = (value: string) => {
    const urlToApply = value === '' ? '' : `?query=${value}`
    setQuery(value)
    navigate(urlToApply)
  }

  // Set up some helper vars to use
  const search = data?.search || {}
  const edges = search?.edges?.map((edge: any) => edge.node)
  const pageInfo = search?.pageInfo

  return (
    <div>
      <SearchBox onChange={handleQueryChange} value={query} />

      <ResultsBox
        error={error}
        loading={loading}
        data={edges}
        hasNextPage={pageInfo?.hasNextPage}
        onLoadMore={() => {
          if (pageInfo.hasNextPage) {
            fetchMore({
              variables: {
                cursor: pageInfo.endCursor,
              },
            })
          }
        }}
      />
    </div>
  )
}

export default GithubPage
