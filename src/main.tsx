import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HermitradeContextProvider from "./context/HermitradeContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HermitradeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode >
  </HermitradeContextProvider>
)
