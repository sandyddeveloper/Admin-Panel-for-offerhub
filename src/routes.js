import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Colors = React.lazy(() => import('/'))
// const Typography = React.lazy(() => import('/'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/', name: 'Theme', element: Colors, exact: true },
  // { path: '/', name: 'Colors', element: Colors },
  // { path: '/', name: 'Typography', element: Typography },
]

export default routes
