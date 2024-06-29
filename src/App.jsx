import { Route, Routes } from "react-router-dom";
import './App.css'
import { FloatingNavbar } from './Components/FloatingNavbar'
import { Toaster } from './Components/ui/toast/toaster'
import { Blank, Clock, DashboardUI, Home, Notes, Profile, SignIn, SignUp, Support, WeatherLayout } from './layout'
import React from "react"
import Dashboard from "./layout/pages/root/LayoutRoot";
// import { StateContextProvider } from "./Context";

const App = () => {
  return (
    <>
      <main className='w-full h-screen text-white'>
        {/* <StateContextProvider> */}
          <Routes>
            <Route index element={<Home />} />

            {/* public routes */}
            {/* <Route path='/sign-in' element={<SignIn />} /> */}
            <Route path='/sign-up' element={<SignUp />} />

            {/* Private routes */}

            <Route path="/" element={<Dashboard />} >
              {/* pages */}
              <Route path="/dashboard" element={<DashboardUI />} />
              <Route path="/dashboard/alarm" element={<Clock />} />
              <Route path="/dashboard/notes" element={<Notes />} />
              <Route path="/dashboard/weather" element={<WeatherLayout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/support" element={<Support />} />
            </Route>



          </Routes>
        {/* </StateContextProvider> */}
        <Toaster />
      </main>
    </>
  )
}

export default App
