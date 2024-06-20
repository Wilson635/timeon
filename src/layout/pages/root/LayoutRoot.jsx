import React from 'react'
import TopBar from '../../../Components/ui/TopBar'
import Sidebar from '../../../Components/ui/Siderbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
// import { StateContextProvider } from '../../../Context'
const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="w-full md:flex z-50">
      <TopBar />
      <Sidebar />

      <section className="flex flex-1 w-full p-4 bg-n-8">
        {/* <StateContextProvider> */}
        {user ? <Navigate to="/sign-in" /> : <Outlet />}
        {/* </StateContextProvider> */}
      </section>

      {/* <Bottombar /> */}
    </div>
  )
}

export default Dashboard
