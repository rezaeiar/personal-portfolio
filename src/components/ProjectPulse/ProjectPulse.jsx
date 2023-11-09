import React from 'react'

export default function ProjectPulse() {
    return (
        <div className="shadow rounded-xl overflow-hidden w-full">
            <div className="animate-pulse flex flex-col">
                <div className="bg-gray-300 h-60 sm:h-56 md:h-64 lg:h-56 xl:h-72 w-full"></div>
                <div className="px-3 py-4 sm:py-6 flex flex-col gap-y-4">
                    <div className="h-3 sm:h-4 w-2/3 bg-gray-300 rounded-xl"></div>
                    <div className="flex flex-col gap-y-2">
                        <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                        <div className="h-2 w-3/4 bg-gray-300 rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
