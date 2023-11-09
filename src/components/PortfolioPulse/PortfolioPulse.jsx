import React from 'react'

export default function PortfolioPulse() {
    return (
        <div className="overflow-hidden w-full">
            <div className="animate-pulse flex flex-col">
                <div className="bg-gray-300 h-64 sm:h-[213px] md:h-[260px] lg:h-[350px] xl:h-[438px] 2xl:h-[532px] w-full rounded-xl"></div>
                <div className="pt-4 md:pt-6 flex flex-col gap-y-3 md:gap-y-4">
                    <div className="h-3 md:h-4 w-2/3 bg-gray-300 rounded-xl"></div>
                    <div className="flex flex-col gap-y-2">
                        <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                        <div className="h-2 w-3/4 bg-gray-300 rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
