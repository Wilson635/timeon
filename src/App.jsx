import { Route, Routes } from "react-router-dom"
import './App.css'
import { FloatingNavbar } from './Components/FloatingNavbar'
import { Toaster } from './Components/ui/toast/toaster'
import { Dashboard, Home, SignIn, SignUp, WeatherLayout } from './layout'
import React from "react"
import { StateContextProvider } from "./Context"

function App() {
  return (
    <main className='w-full h-screen text-white'>
      {/* <Router> */}
        {/* <Routes>
          <FloatingNavbar />
          <Route index element={<Home />} />

          public routes
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route element={<Dashboard />}>
            <Route path='/dashboard/weather' element={<WeatherLayout />} />
          </Route>



        </Routes> */}
      {/* </Router> */}
      <StateContextProvider>
        
      <Dashboard />
      </StateContextProvider>
      <Toaster />
    </main>
  )
}

export default App
