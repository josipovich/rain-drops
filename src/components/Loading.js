import React from 'react'
import logo from './../loading-animation.svg'


export default ({visible}) => {
    return (
        <div className="loading">
            <img src={logo} className="loading-animation" alt="logo" />
        </div>
    )
}