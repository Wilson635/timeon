import { Route, Routes } from "react-router-dom";
import './App.css'
import { FloatingNavbar } from './Components/FloatingNavbar'
import { Toaster } from './Components/ui/toast/toaster'
import { Home, SignIn, SignUp } from './layout'
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
        <FloatingNavbar />
        <Routes>
          <Route index element={<Home />} />

          {/* public routes */}
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          {/* <Route element={<LayoutRoot />}>
            <Route path='/dashboard' element={<WeatherLayout />} />
          </Route> */}



        </Routes>
        <Toaster />
      </main>
    </>
  )
}

export default App
