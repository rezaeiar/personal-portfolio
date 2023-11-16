import React, { useEffect, useState } from 'react'

import Member from '../Member/Member'

import { useDispatch, useSelector } from 'react-redux'
import { getMembersFromServer } from '../../Redux/store/members'

import { _ } from 'lodash'

export default function Members() {

    const members = useSelector(state => state.members)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMembersFromServer())
    }, [])

    return (
        <div className='py-6 lg:py-12 grid grid-cols-2 md:grid-cols-4'>
            {
                _.map(members, (member) => (
                    <Member key={member.id} {...member} />
                ))
            }
        </div>
    )
}
