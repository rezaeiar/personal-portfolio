import React from 'react'

export default function TopBar() {
    return (
        <div className='py-3 px-2.5 bg-gradient-to-r from-[#F8FAFF] from-0% via-[#EEF4FF] via-45% to-[#FFECEC] to-100%'>
            <div className="container">
                <div className='flex justify-center gap-x-2 text-xs'>
                    <span className='text-gray-700 font-Inter-Regular'>
                        Get Quick response via contact us on WhatsApp
                    </span>
                    <span className='text-zinc-950 font-Inter-SemiBold'>
                        +91 84695 47012
                    </span>
                </div>
            </div>
        </div>
    )
}
