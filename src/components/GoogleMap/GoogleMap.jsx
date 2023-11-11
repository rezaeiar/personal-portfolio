import React from 'react'

export default function GoogleMap() {
    return (
        <div className='pt-6 sm:pt-12 md:pt-16 lg:pt-20'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103898.60787315741!2d51.145264844918145!3d35.53316152855555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9205c95d95f929%3A0x68041b8d38acb383!2sEslamshahr%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1699728368714!5m2!1sen!2s" className='w-full h-[280px] sm:h-[420px] md:h-[540px] lg:h-[650px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
