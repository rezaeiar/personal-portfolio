import React, { useEffect } from 'react'
import useScroll from '../../hooks/useScroll'

import ContactUsHeader from '../../components/ContactUsHeader/ContactUsHeader'

export default function ContactUs() {

    useScroll()
    return (
        <>
            <ContactUsHeader />
        </>
    )
}
