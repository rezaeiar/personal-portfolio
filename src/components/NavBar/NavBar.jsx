import React from 'react'

import { Link } from 'react-router-dom'
import Button from '../Button/Button'

export default function NavBar() {
    return (
        <div className='py-5 bg-white sticky top-0 shadow-sm z-50'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-6">
                        <Link to='/' className='h-9 flex items-center'>
                            <img src="./images/logoipsum-logo.svg" alt="Logo" />
                        </Link>
                        <div className="flex h-9 w-60 bg-[#F5F6F7] rounded-xl">
                            <input type="text" className='w-full h-full bg-transparent outline-none pl-8 text-sm font-Inter-Regular placeholder:font-Inter-Regular text-[#99A4AF] placeholder:text-[#99A4AF]' placeholder='Search' />
                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        <Button color='text-zinc-950' font='font-Inter-Regular'>
                            💼 Work
                        </Button>
                        <Button color='text-zinc-950' font='font-Inter-Regular'>
                            😀 About Me
                        </Button>
                        <Button px='px-3.5' py='py-3' bg='bg-zinc-950' color='text-white' rounded='rounded-md' font='font-Inter-SemiBold'>
                            🤙 Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}