import React from 'react'
import NotAuthorized from './views/pages/NotAuthorized/NotAuthorized'
import AdminRoute from './AdminRoute'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {
    path: '/admin-page',
    name: 'Admin Only Page',
    element: AdminRoute,
  },
  { path: '/not-authorized', name: 'Not Authorized', element: NotAuthorized },
]

export default routes
