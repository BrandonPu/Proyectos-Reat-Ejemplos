import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MarvelApp } from './components/MarvelApp'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarvelApp />
  </StrictMode>,
)
