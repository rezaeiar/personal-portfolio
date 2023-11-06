import React from 'react'

export default function PortfolioCovers() {
    return (
        <div className='pb-6 lg:pb-14'>
            <div className="container">
                <div className="relative sm:h-[192px] md:h-[232px] lg:h-[310px] xl:h-[390px] 2xl:h-[460px] flex items-end sm:mt-20">
                    <div className='hidden sm:flex'>
                        <div className="rounded-xl overflow-hidden absolute -right-12 top-0">
                            <img src="./images/work/Rectangle 100.png" className='h-[174px] md:h-[212px] lg:h-[276px] xl:h-[340px] 2xl:h-[410px]' alt="" />
                        </div>
                        <div className="rounded-xl overflow-hidden absolute -left-4 -top-12 md:-top-16 lg:-top-20">
                            <img src="./images/work/Rectangle 99.png" className='h-[174px] md:h-[212px] lg:h-[276px] xl:h-[340px] 2xl:h-[410px]' alt="" />
                        </div>
                    </div>
                    <div className="absolute -top-16 lg:-top-20 right-16 lg:right-24 hidden md:flex gap-x-7">
                        <img src="./images/work/Frame.svg" className='h-fit w-6 lg:w-8' alt="" />
                        <img src="./images/work/Frame.svg" className='h-fit mt-8 lg:mt-10 xl:mt-12 w-6 lg:w-8' alt="" />
                        <img src="./images/work/Frame (2).svg" className='h-fit mt-2 xl:mt-4 w-10 lg:w-14' alt="" />
                    </div>
                    <img src="./images/work/Frame 78.svg" className='w-full' alt="" />
                </div>
            </div>
        </div>
    )
}
