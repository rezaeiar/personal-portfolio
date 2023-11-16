import React from 'react'

export default function SingleWorkDetails({ title, children }) {
    return (
        <div className='py-20'>
            <div className="container">
                <div className="flex flex-col gap-y-10">
                    <h4 className='text-5xl font-Inter-Bold text-[#34113F]'>
                        {title}
                    </h4>
                    <div className="flex flex-col gap-y-6 font-Inter-Regular text-[#475467]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
