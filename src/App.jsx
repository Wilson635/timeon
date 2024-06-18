import { Route, Routes } from "react-router-dom";
import './App.css'
import { FloatingNavbar } from './Components/FloatingNavbar'
import { Toaster } from './Components/ui/toast/toaster'
import { Blank, Clock, DashboardUI, Home, Notes, Profile, SignIn, SignUp } from './layout'
import React from "react"
import Dashboard from "./layout/pages/root/LayoutRoot";

const App = () => {
  return (
    <>
      <main className='w-full h-screen text-white'>

        {/* <LayoutRoot /> */}

        {/* <Router>
          <FloatingNavbar />
          <Routes>
            <Route index element={<Home />} />

            public routes
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route element={<LayoutRoot />}>
              <Route path='/dashboard' element={<WeatherLayout />} />
            </Route>



          </Routes>
        </Router> */}
        {/* <FloatingNavbar /> */}
        <Routes>
          <Route index element={<Home />} />

          {/* public routes */}
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/" element={<Dashboard />} >
            <Route path="/dashboard" element={<DashboardUI />} />
            <Route path="/dashboard/alarm" element={<Clock />} />
            <Route path="/dashboard/notes" element={<Notes />} />
            <Route path="/dashboard/weather" element={<Blank />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/Weather" element={<Blank />} />
            <Route path="/dashboard/alarm" element={<Blank />} />
            <Route path="/dashboard/note" element={<Blank />} />
          </Route> */}



        </Routes>
        <Toaster />
      </main>
    </>
  )
}

export default App
