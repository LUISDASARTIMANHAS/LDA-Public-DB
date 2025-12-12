// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import './src/css/card.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
