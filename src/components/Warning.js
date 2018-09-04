import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import './../styles/Warning.css'


const Warning = ({message}) => <div className="Warning">{message}</div>

Warning.propTypes = {
    message: PropTypes.string.isRequired
}

export default view(Warning)
