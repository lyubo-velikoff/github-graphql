import { useLocation } from 'react-router'

export function useQueryStrings() {
  return new URLSearchParams(useLocation().search)
}
