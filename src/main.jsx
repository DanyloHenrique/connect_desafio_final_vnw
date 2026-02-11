import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import MainRoutes from './Routes'

import './styles/main.scss'
import { Footer, Header } from './components'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <MainRoutes />
      <Footer />
    </StrictMode>
  </BrowserRouter>,
)
