import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import {statusOk} from './../lib/utils'
import Warning from './Warning'
import './../styles/Results.css'


const Results = ({ statuses, children, message }) => {    
    return statusOk(statuses)  
        ? <div className="results">{children}</div> 
        : <Warning message={message} />
}

Results.propTypes = {
      statuses: PropTypes.array.isRequired
    , message: PropTypes.string
}

export default view(Results)
