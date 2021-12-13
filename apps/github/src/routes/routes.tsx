import { GithubPage, UserPage } from '../pages'

export const routes = [
  {
    title: 'Github',
    path: '/',
    component: <GithubPage />,
  },
  {
    title: 'User Details',
    path: '/users/:userId',
    component: <UserPage />,
  },
]
