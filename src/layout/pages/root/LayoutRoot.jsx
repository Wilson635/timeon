import React from 'react'
import TopBar from '../../../Components/ui/TopBar'
import Sidebar from '../../../Components/ui/Siderbar'
import { Outlet } from 'react-router-dom'
// import { StateContextProvider } from '../../../Context'
const Dashboard = () => {
  return (
    <div className="w-full md:flex z-50">
      <TopBar />
      <Sidebar />

      <section className="flex flex-1 w-full p-4 bg-n-8">
        {/* <StateContextProvider> */}
          <Outlet />
        {/* </StateContextProvider> */}
      </section>

      {/* <Bottombar /> */}
    </div>
  )
}

export default Dashboard
