import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import ModulePage from '../pages/ModulePage'
import ComparisonPage from '../pages/ComparisonPage'
import ConclusionPage from '../pages/ConclusionPage'
import NotFoundPage from '../pages/NotFoundPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'modelos/:modelSlug',
        element: <ModulePage />,
      },
      {
        path: 'comparacion',
        element: <ComparisonPage />,
      },
      {
        path: 'conclusion',
        element: <ConclusionPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
