import React from 'react'

import Button from '../Button/Button'

export default function GetStarted() {
    return (
        <div className='pt-6 pb-20'>
            <div className="container">
                <div className="flex flex-col gap-y-16 items-center">
                    <h4 className='text-6xl font-Inter-Bold text-center'>
                        Have a project in mind? <br />
                        Let’s get to work.
                    </h4>
                    <Button px='px-3.5' py='py-3' bg='bg-zinc-950' color='text-white' rounded='rounded-md' font='font-Inter-SemiBold'>
                        🦾 Start Project
                    </Button>
                </div>
            </div>
        </div>
    )
}
