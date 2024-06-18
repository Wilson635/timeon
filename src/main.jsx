import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import { StateContextProvider } from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>

)
