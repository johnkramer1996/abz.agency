import { Navigate, createBrowserRouter } from 'react-router-dom'
import { MainPage, NotFoundPage } from 'pages'
import { baseLayout } from './layouts/baseLayout'
import { PATH_PAGE } from 'shared/lib'

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to={PATH_PAGE.page404} replace /> },
      ],
    },
  ])
