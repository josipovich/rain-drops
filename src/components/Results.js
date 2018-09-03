import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import {statusOk} from './../lib/utils'
import Warning from './Warning'
import './../styles/Results.css'


const Results = props => {    
    return statusOk(props.statuses)  
        ? <div className="results">{props.children}</div> 
        : <Warning message={props.message} />
}

Results.propTypes = {
      statuses: PropTypes.array.isRequired
    , message: PropTypes.string
}

export default view(Results)
