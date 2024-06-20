import React from 'react'
import { Button } from './ui/BorderMove'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container placeholder:bg-white/5'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden gap-6 sm:mb-8 sm:flex sm:justify-center">
            <img src="/logo.png" alt="" className='w-36 h-36' />
            <img src="/timeon.png" alt="" />
          </div>
          <div className="text-center">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A platform for managing one's schedule and scheduling tasks.
              Notification based on recorded spots, weather conditions.
            </p>
            <div className="w-full mt-12 px-28">
              <Link to="/sign-in">
                <Button
                  //   random duration will be fun , I think , may be not
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    //   add these two
                    //   you can generate the color from here https://cssgradient.io/
                    background: "rgb(4,7,29)",
                    backgroundColor:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    // add this border radius to make it more rounded so that the moving border is more realistic
                    borderRadius: `calc(1.75rem* 0.96)`,
                  }}
                  // remove bg-white dark:bg-slate-900
                  className="flex-1 py-4 px-28 first-letter: text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >

                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
