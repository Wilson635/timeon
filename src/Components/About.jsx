import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Section from './Section'
import { presentation } from '../assets'

const About = () => {
    return (

        <div className="relative  isolate overflow-hidden bg-transparent px-10 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-n-6 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-n-12">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            {/* <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p> */}
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Overview</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                A platform for managing one's schedule and scheduling tasks.
                                Notification based on recorded spots, weather conditions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] p-5 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={presentation}
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            {/* <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id.
                            </p> */}
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"><circle cx="7" cy="7" r="5" fill="#9f8c14" opacity="0.5" /><path fill="#9f8c14" d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765C2 18.104 3.919 20 6.286 20z" /></svg>                                        <span>
                                        <strong className="font-semibold text-white mr-2">Wheather.</strong>
                                        Hourly weather forecast from your position. Check current conditions about your position with radar, hourly, and more.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#9f8c14" d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z" opacity="0.5" /><path fill="#9f8c14" fill-rule="evenodd" d="M8.75 2.012v20h-1.5v-20zM1.25 8A.75.75 0 0 1 2 7.25h2a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8m0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd" /><path fill="#9f8c14" d="M10.75 6.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" /></svg>                                        <span>
                                        <strong className="font-semibold text-white mr-2">Task Manager.</strong>
                                        is a services showing what tasks you have to do. Here's more on how to get there and how to use it.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"><path fill="#9f8c14" d="M12 22c4.836 0 8.756-3.884 8.756-8.675c0-4.79-3.92-8.675-8.756-8.675s-8.757 3.884-8.757 8.675C3.243 18.115 7.163 22 12 22" opacity="0.5" /><path fill="#9f8c14" d="M12 8.747c.402 0 .729.324.729.723v3.556l2.219 2.198a.718.718 0 0 1 0 1.022a.734.734 0 0 1-1.032 0l-2.433-2.41a.72.72 0 0 1-.213-.51V9.47c0-.4.326-.723.73-.723" /><path fill="#9f8c14" fill-rule="evenodd" d="M8.24 2.34a.719.719 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.719.719 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.719.719 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.719.719 0 0 1-.233-.996" clip-rule="evenodd" /></svg>                                        <span>
                                        <strong className="font-semibold text-white mr-2">Clock System.</strong>
                                        An alarm clock is a system that emits a sound at a predetermined time. It is usually used to wake up in the morning, hence the name.                                       </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Optimize your time, don't let weather conditions prevent you from carrying out your various activities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About