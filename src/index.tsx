import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.scss'
import { RootCmp } from './RootCmp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <RootCmp />
      </Router>
    </QueryClientProvider>
  </StrictMode>,
)
// serviceWorkerRegistration.register()