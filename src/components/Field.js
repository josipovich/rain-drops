import React from 'react'


export default (props) => {
    return (
        <div className="field">
            <span className="name">{props.name}: </span>
            <span className="value">{props.value}</span>
        </div>
    )
}