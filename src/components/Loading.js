import React from 'react'
import logo from './../loading-animation.svg'


export default ({loadingText}) => {
    return (
        <div className="loading">
            <img src={logo} className="loading-animation" alt="logo" />
            {loadingText}
        </div>
    )
}