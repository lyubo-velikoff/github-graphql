import { Repository } from "../../pages/users/interface"

export type Nodes = {
  id: string
  name: string
  email?: string
  location: string
  login: string
  url: string
  avatarUrl: string
}

export type ResultsBoxProps = {
  data?: [Nodes]
  pageInfo?: number
  error?: any
  loading: boolean
  hasNextPage: boolean
  onLoadMore: () => void
}

export type SearchBoxProps = {
  onChange: (event: any) => void
  value: string
}

export type UserCardProps = {
  name: string
  avatarUrl: string
}

export type RepositoryBoxProps = {
  data: [Repository]
}
