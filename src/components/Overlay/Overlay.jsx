import React from 'react'

export default function Overlay({ changeShowMenu, isShowMenu }) {

    const chaneMenuDisplayHandler = (state) => {
        changeShowMenu(state)
    }
    return (
        <div className={`fixed h-screen w-full left-0 top-0 backdrop-blur-sm z-40 transition-all bg-white/10 ${isShowMenu ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => chaneMenuDisplayHandler(false)}></div>
    )
}
