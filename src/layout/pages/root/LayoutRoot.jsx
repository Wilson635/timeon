import React from 'react'
import TopBar from '../../../Components/ui/TopBar'
import Sidebar from '../../../Components/ui/Siderbar'
import { Navigate, Outlet } from 'react-router-dom'
import Bottombar from '../../../Components/ui/BottomBar'
// import { useAuth } from '../../../Context/AuthContext'
// import { StateContextProvider } from '../../../Context'
const Dashboard = () => {
  // const { user } = useAuth();
  return (
    <div className="w-full md:flex z-50">
      <TopBar />
      <Sidebar />

      <section className="flex flex-1 w-full p-4 bg-n-8">
        {/* {user ? <Outlet /> : <Navigate to="/sign-in" />} */}
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default Dashboard
