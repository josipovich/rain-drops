import React from 'react'
import logo from './../loading-animation.svg'
import { view } from 'react-easy-state'


const Loading = () => {
    return (
        <div className="loading">
            <img src={logo} className="loading-animation" alt="logo" />
        </div>
    )
}

export default view(Loading)
