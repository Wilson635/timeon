import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { StateContextProvider } from './Context'
import { AuthProvider } from './Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <AuthProvider>
        {/* <StateContextProvider> */}

          <App />
        {/* </StateContextProvider> */}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>

)
