import React from 'react'

export default function ProjectPulse() {
    return (
        <div class="shadow rounded-xl overflow-hidden w-full">
            <div class="animate-pulse flex flex-col">
                <div class="bg-gray-300 h-60 sm:h-56 md:h-64 lg:h-56 xl:h-72 w-full"></div>
                <div class="px-3 py-4 sm:py-6 flex flex-col gap-y-4">
                    <div class="h-3 sm:h-4 w-2/3 bg-gray-300 rounded-xl"></div>
                    <div class="flex flex-col gap-y-2">
                        <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                        <div class="h-2 w-3/4 bg-gray-300 rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
