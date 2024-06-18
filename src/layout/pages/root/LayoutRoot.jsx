import React from 'react'
import TopBar from '../../../Components/ui/TopBar'
import Sidebar from '../../../Components/ui/Siderbar'
import { Outlet } from 'react-router-dom'
import Blank from '../Blank'

const Dashboard = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <Sidebar />

      <section className="flex flex-1 h-screen p-4 w-full bg-n-8 z-40 border-2 border-white/5 rounded-lg glassCard m-3">
        <Outlet />
        {/* <Blank /> */}
      </section>

      {/* <Bottombar /> */}
    </div>
  )
}

export default Dashboard
