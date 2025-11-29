import React from 'react'
import ReactDOM from 'react-dom/client' // <--- QUESTO MANCAVA!
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom' // Usiamo solo HashRouter per GitHub Pages
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
)