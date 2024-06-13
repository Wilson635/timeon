import './App.css'
import { FloatingNavbar } from './Components/FloatingNavbar'
import { Toaster } from './Components/ui/toast/toaster'
import { Dashboard, Home, SignIn, SignUp, WeatherLayout } from './layout'

function App() {
  return (
    <div className='w-full h-screen px-8 text-white pt-[4.75rem] lg:pt-[5.25rem]'>
      <FloatingNavbar />
      <SignUp />
      <Toaster />
    </div>
  )
}

export default App
