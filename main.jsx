// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
