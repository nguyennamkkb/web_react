import App from 'components/App'
import { createBrowserRouter } from 'react-router-dom'
import AuthView from 'view/auth'
import ShareBio from 'view/home/ShareBio'

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/bio/:id',
        Component: ShareBio
      },
      {
        path: '/auth',
        Component: AuthView
      }
    ]
  }
])

export default router
