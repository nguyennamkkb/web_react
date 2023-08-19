import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import React from 'react'
import { legacy_createStore as createStore } from 'redux'
import { RouterProvider } from 'react-router-dom'
import router from './plugin/routes'
import { Alert } from 'react-bootstrap';


import { Provider } from 'react-redux'
import allReducers from './plugin/store/reducers'
const store = createStore(allReducers)
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>

      <Provider store={store}>
        <RouterProvider router={router} />
        <App />
      </Provider>

  </React.StrictMode>
)
