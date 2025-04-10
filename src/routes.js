import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const some = React.lazy(() => import('/'))
// const some = React.lazy(() => import('/'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/', name: 'something', element: some, exact: true },
  // { path: '/', name: 'something', element: some },
  // { path: '/', name: 'something', element: some },
]

export default routes
