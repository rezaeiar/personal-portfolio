import React from 'react'

import Button from '../Button/Button'

export default function Header() {
    return (
        <div className='bg-gradient-to-r from-[#F8D9D8] from-0% via-[#F5F6F7] via-50% to-[#F3DFED] to-100% py-20'>
            <div className="container">
                <div className="flex justify-between gap-x-12 items-center">
                    <div className="flex flex-col gap-y-7">
                        <h4 className='font-Inter-Bold text-5xl/[55px]'>
                            Welcome to my new Creative World!
                        </h4>
                        <p className='text-[#1D1D1D] font-Inter-Regular text-xl/[32px]'>
                            Kirit Goti is a designer focused on building brands and creating digital experiences — currently working at TechHive
                        </p>
                        <Button px='px-3.5' py='py-3' bg='bg-zinc-950' color='text-white' rounded='rounded-md' font='font-Inter-SemiBold'>
                            Let’s Get Started
                        </Button>
                    </div>
                    <div>
                        <img src="./images/home/image 1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
