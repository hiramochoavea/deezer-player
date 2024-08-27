import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DeezerPlayer from './DeezerPlayer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeezerPlayer />
  </StrictMode>,
)
