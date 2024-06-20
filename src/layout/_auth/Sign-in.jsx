import React, { useState } from 'react'
import clsx from 'clsx'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { ValidateEmail } from '../../lib/utils';
import { useToast } from '../../Components/ui/toast/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../../lib/appwrite/config';

const SignIn = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [error, setError] = useState(null);
    const {toast} = useToast();
    const navigate = useNavigate();

    // login function
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!ValidateEmail(email)) {
            // setError('Please enter a valid email.');
            toast({ title: 'Please enter a valid email.' });
            return;
        }

        if (!password) {
            // setError('Please enter a password');
            toast({ title: 'Please enter a password.' });
        }

        try {
            await account.createEmailPasswordSession(email, password);
            navigate("/")
        } catch (error) {
            toast({ title: 'Something went wrong.' });
        }
    }

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className=' w-11/12 pace-y-6 rounded-xl bg-white/5 p-6 sm:p-10'>
                    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter you details.</p>
                    <div className='mt-5'>
                        <form action="" onSubmit={handleLogin}>
                            <div className='flex flex-col'>
                                <label className='text-sm/6 font-medium text-white'>Email</label>
                                <input
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className={clsx(
                                        'mt-3 block w-full rounded-lg border-none bg-white/5 py-4 px-3 text-sm/6 text-white',
                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                    )}
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {/* {error && <p className='text-rose-500 text-xs pb-1'> {error} </p>} */}
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label className='text-sm/6 font-medium text-white'>Password</label>
                                <div className={clsx(
                                    ' flex items-center mt-3 w-full rounded-lg border-none bg-white/5',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                )}>

                                    <input
                                        // value={password}
                                        // onChange={(e) => setPassword(e.target.value)}
                                        className={clsx(
                                            'w-full rounded-lg border-none bg-transparent py-4 px-3 text-sm/6 text-white',
                                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                        )}
                                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                        type={isShowPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {
                                        isShowPassword ? (
                                            <EyeIcon
                                                onClick={() => toggleShowPassword()}
                                                className='cursor-pointer w-5 h-5 text-white/30 mr-3'
                                            />
                                        ) : (
                                            <EyeSlashIcon
                                                onClick={() => toggleShowPassword()}
                                                className='cursor-pointer w-5 h-5 text-white/30 mr-3'
                                            />
                                        )
                                    }
                                </div>
                                {/* {error && <p className='text-rose-500 text-xs pb-1'> {error} </p>} */}
                            </div>
                            <div className='mt-8 flex justify-between flex-wrap items-center'>
                                <div>
                                    <input type="checkbox" id='remember' />
                                    <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
                                </div>
                                <button className='font-medium text-base text-violet-500'>Forgot password</button>
                            </div>
                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button
                                    // onClick={handleLogin}
                                    type='submit'
                                    className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign in</button>
                            </div>
                        </form>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Don't have an account?</p>
                            <Link
                                to='/sign-up'
                                className='ml-2 font-medium text-base text-violet-500'>Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-none">
                <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 rounded-md bg-white/10 backdrop-blur-lg" />
            </div>
        </div>
    )
}

export default SignIn
