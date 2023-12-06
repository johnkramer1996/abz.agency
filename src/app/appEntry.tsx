import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'
import { appStore, persistedStore } from './appStore'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = document.getElementById('root') as HTMLElement

async function initApp() {}

initApp().then(() =>
  createRoot(root).render(
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RouterProvider router={appRouter()} />
        <ToastContainer />
      </PersistGate>
    </ReduxProvider>,
  ),
)
