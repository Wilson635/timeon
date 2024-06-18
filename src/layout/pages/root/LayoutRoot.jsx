import React from 'react'
import TopBar from '../../../Components/ui/TopBar'
import Sidebar from '../../../Components/ui/Siderbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <Sidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      {/* <Bottombar /> */}
    </div>
  )
}

export default Dashboard
