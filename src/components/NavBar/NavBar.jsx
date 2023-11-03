import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Button from '../Button/Button'

export default function NavBar() {

    const [searchValue, setSearchValue] = useState('')

    const getSearch = () => {

        console.log(searchValue);
        // Search Handler
    }

    return (
        <div className='py-4 md:py-5 bg-white sticky top-0 shadow-sm z-50'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-6">
                        <Link to='/' className='h-7 lg:h-9 flex items-center'>
                            <img src="./images/logoipsum-logo.svg" alt="Logo" className='h-full w-full' />
                        </Link>
                        <div className="hidden md:flex items-center h-8 lg:h-9 w-60 bg-[#F5F6F7] rounded-xl relative">
                            <i className="bi bi-search absolute text-[#99A4AF] text-xs ml-3 cursor-pointer" onClick={getSearch}></i>
                            <input type="text" value={searchValue} onKeyDown={event => event.keyCode === 13 && getSearch()} onChange={(event => setSearchValue(event.target.value))} className='w-full h-full bg-transparent outline-none pl-8 text-xs lg:text-sm font-Inter-Regular placeholder:font-Inter-Regular text-[#99A4AF] placeholder:text-[#99A4AF]' placeholder='Search' />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-4 lg:gap-x-6">
                            <Button to='/work' styles='hidden md:block text-zinc-950 font-Inter-Regular text-[10px] lg:text-xs'>
                                💼 Work
                            </Button>
                            <Button to='/about-me' styles='hidden md:block text-zinc-950 font-Inter-Regular text-[10px] lg:text-xs'>
                                😀 About Me
                            </Button>
                            <Button to='/contact-us' styles='hidden md:block transition-colors hover:bg-gray-800 px-3 py-2.5 lg:px-3.5 lg:py-3 bg-zinc-950 text-white rounded-md font-Inter-SemiBold text-[10px] lg:text-xs'>
                                🤙 Contact Us
                            </Button>
                        </div>
                        <div className="block md:hidden">
                            <span className='cursor-pointer'>
                                <i className="bi bi-list text-xl text-[#99A4AF]"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}