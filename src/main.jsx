import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './pages/header.jsx'
import MoewrFooter from './pages/footer.jsx'
import './i18n.js'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <App />
 {/* <MoewrFooter /> */}
 {/* dashboard ayuu kasoo maqanayaa
  */}
  

  </BrowserRouter>
  
)
