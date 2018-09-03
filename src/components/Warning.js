import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'


const Warning = ({message}) => <div className="warning-msg">{message}</div>

Warning.propTypes = {
    message: PropTypes.string.isRequired
}

export default view(Warning)
