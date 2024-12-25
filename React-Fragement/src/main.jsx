import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App }from './App.jsx'
{/*import { Practicses } from './practics.jsx'*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/*<Practicses/> */}
  </StrictMode>,
)
