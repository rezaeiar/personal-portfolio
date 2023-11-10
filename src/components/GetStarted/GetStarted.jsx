import React from 'react'

import Button from '../Button/Button'

export default function GetStarted() {
    return (
        <div className='pt-6 pb-12 md:pb-20'>
            <div className="container">
                <div className="flex flex-col gap-y-8 md:gap-y-16 items-center">
                    <h4 className='text-2xl sm:text-4xl md:text-6xl font-Inter-Bold text-center'>
                        Have a project in mind? <br />
                        Let’s get to work.
                    </h4>
                    <Button title='🦾 Start Project' route='/work' style='block transition-colors hover:bg-gray-800 px-3 py-2.5 lg:px-3.5 lg:py-3 rounded-md font-Inter-SemiBold text-[10px] lg:text-xs bg-gradient-to-r from-[#F5E9F1] from-0% via-[#EBF4F8] via-50% to-[#F7E3E2] to-100% text-black' />
                </div>
            </div>
        </div>
    )
}
