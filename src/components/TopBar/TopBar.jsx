import React from 'react'

export default function TopBar() {
    return (
        <div className='hidden sm:flex justify-center items-center gap-x-2.5 text-[10px] md:text-xs py-2 md:py-3 bg-gradient-to-r from-[#F8FAFF] from-0% via-[#EEF4FF] via-45% to-[#FFECEC] to-100%'>
            <span className='text-gray-700 font-Inter-Regular'>
                Get Quick response via contact us on WhatsApp
            </span>
            <span className='text-zinc-950 font-Inter-SemiBold flex gap-x-1 items-center'>
                <i className="bi bi-whatsapp"></i>
                <a href="tel:+909999999000" className='cursor-pointer' title='Call Me!'>
                    +90 54321 09876
                </a>
            </span>
        </div>
    )
}
