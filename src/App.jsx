import './App.css'
import { FloatingNavbar } from './Components/FloatingNavbar'
import { Home, WeatherLayout } from './layout'

function App() {
  return (
    <div className='w-full h-screen px-8 text-white pt-[4.75rem] lg:pt-[5.25rem]'>
      <FloatingNavbar />
      <Home />
    </div>
  )
}

export default App
