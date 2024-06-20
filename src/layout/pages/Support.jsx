import React from 'react'
import { Button } from '../../Components/ui/BorderMove'
import { homeSmile } from '../../assets'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const Support = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mx-auto w-full mt-5'>
                <h1 className='text-5xl font-bold w-full max-w-md text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-600'> Welcome to our support page </h1>

                <div className="hidden mt-12 mb-12 relative w-1/2 h-full lg:flex top-0 items-center justify-center bg-none">
                    <div className="w-60 h-60 mb-9 rounded-full bg-gradient-to-tr from-indigo-500 to-yellow-600 animate-spin" />
                    <div className="w-full h-1/2  absolute bottom-0 rounded-md bg-n-8/20 backdrop-blur-lg" />
                </div>
                <div className='w-full'>
                    <div className="mt-6">
                        <dl className="divide-x flex justify-between text-center divide-slate-800">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support
