import React, { useEffect } from 'react'
import useScroll from '../../hooks/useScroll'

import ContactUsHeader from '../../components/ContactUsHeader/ContactUsHeader'
import GetInTouch from '../../components/GetInTouch/GetInTouch'

export default function ContactUs() {

    useScroll()
    return (
        <>
            <ContactUsHeader />
            <GetInTouch />
        </>
    )
}
