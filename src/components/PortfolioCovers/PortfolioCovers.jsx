import React from 'react'

export default function PortfolioCovers() {
    return (
        <div className='pb-14'>
            <div className="container">
                <div className="relative h-[364px] flex items-end mt-24">
                    <div>
                        <div className="rounded-xl overflow-hidden absolute -right-12 top-0">
                            <img src="./images/work/Rectangle 100.png" className='h-[340px]' alt="" />
                        </div>
                        <div className="rounded-xl overflow-hidden absolute -left-2 -top-24">
                            <img src="./images/work/Rectangle 99.png" className='h-[340px]' alt="" />
                        </div>
                    </div>
                    <div className="absolute -top-24 right-24 flex gap-x-7">
                        <img src="./images/work/Frame.svg" className='h-fit ' alt="" />
                        <img src="./images/work/Frame.svg" className='h-fit mt-12' alt="" />
                        <img src="./images/work/Frame (2).svg" className='h-fit mt-4' alt="" />
                    </div>
                    <img src="./images/work/Frame 78.svg" className='w-full' alt="" />
                </div>
            </div>
        </div>
    )
}
