import React, { useState } from 'react'
import { FloatingNavbar } from '../../Components/FloatingNavbar'
import { BackgroundLayout, MiniCard, WeatherCard } from '../../Components'
import { useStateContext } from '../../Context'
import Footer from '../../Components/Footer'

const WeatherLayout = () => {
    const [input, setInput] = useState('')
    const { weather, thisLocation, values, place, setPlace } = useStateContext()
    // console.log(weather)
  
    const submitCity = () => {
      setPlace(input)
      setInput('')
    }
    return (
        <>
            <FloatingNavbar />
            <nav className='w-full p-3 flex justify-between sm:flex-wrap items-center'>
                <img src='/logoTimer.png' alt='logo' className='w-32' />
                <div className='glassCard backdrop:blur-0 w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipTSearch0"><g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={4}><path fill="#4d4d4d" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></path><path strokeLinecap="round" d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"></path></g></mask></defs><path fill="white" d="M0 0h48v48H0z" mask="url(#ipTSearch0)"></path></svg>
                    <input onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            // sumit the form
                            submitCity()
                        }
                    }} type="text" placeholder='Search a city' className='bg-none bg-transparent placeholder:text-white focus:outline-none w-full text-white text-sm' value={input} onChange={e => setInput(e.target.value)} />
                </div>
            </nav>
            <BackgroundLayout></BackgroundLayout>
            <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
                <WeatherCard
                    place={thisLocation}
                    windspeed={weather.wspd}
                    humidity={weather.humidity}
                    temperature={weather.temp}
                    heatIndex={weather.heatindex}
                    iconString={weather.conditions}
                    conditions={weather.conditions}
                />

                <div className='flex flex-wrap sm:flex-cols-2 gap-x-8 justify-center gap-8 w-[60%]'>
                    {
                        values?.slice(1, 7).map(curr => {
                            return (
                                <MiniCard
                                    key={curr.datetime}
                                    time={curr.datetime}
                                    temp={curr.temp}
                                    iconString={curr.conditions}
                                />
                            )
                        })
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}

export default WeatherLayout
