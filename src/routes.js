/* eslint-disable prettier/prettier */
import React from 'react'
import NotAuthorized from './views/pages/NotAuthorized/NotAuthorized'
import AdminRoute from './AdminRoute'
import ProtectedRoute from './ProtectedRoute'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },

  {
    path: '/dashboard',
    name: 'Dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin-page',
    name: 'Admin Only Page',
    element: AdminRoute,
  },
  { path: '/not-authorized', name: 'Not Authorized', element: NotAuthorized },
]

export default routes
