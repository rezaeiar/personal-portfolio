import React, { useEffect } from 'react'

import { Link, NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getMenusFromServer } from '../../Redux/store/menus'

export default function Menu({ changeShowMenu, isShowMenu }) {

    const menus = useSelector(state => state.menus)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenusFromServer())
    }, [])

    const chaneMenuDisplayHandler = (state) => {

        changeShowMenu(state)
    }

    return (
        <div className={`fixed top-0 bg-white/80 shadow-2xl h-screen w-56 sm:w-80 z-50 py-6 px-4 flex gap-y-8 flex-col transition-all ${isShowMenu ? '-left-0 sm:-left-0' : '-left-56 sm:-left-80'}`}>
            <div className="flex justify-between items-center">
                <Link to='/' className='h-7 lg:h-9 flex items-center' onClick={() => chaneMenuDisplayHandler(false)}>
                    <img src="/images/logoipsum-logo.svg" alt="Logo" className='h-full w-full' />
                </Link>
                <i className="bi bi-x text-xl sm:text-2xl" onClick={() => chaneMenuDisplayHandler(false)}></i>
            </div>
            <div className='flex flex-col gap-y-4'>
                <NavLink to='/' onClick={() => chaneMenuDisplayHandler(false)} className={({isActive}) => isActive ? 'py-1.5 px-2 rounded font-Inter-Regdivar text-sm bg-black text-white' : 'py-1.5 px-2 rounded text-[#454D55] font-Inter-Regdivar text-sm'}>
                    🏠 Home
                </NavLink>
                {
                    menus.map(menu => (
                        <NavLink to={menu.route} key={menu.id} onClick={() => chaneMenuDisplayHandler(false)} className={({isActive}) => isActive ? 'py-1.5 px-2 rounded font-Inter-Regdivar text-sm bg-black text-white' : 'py-1.5 px-2 rounded text-[#454D55] font-Inter-Regdivar text-sm'}>
                            {menu.title}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}
