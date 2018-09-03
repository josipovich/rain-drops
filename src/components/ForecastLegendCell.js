import React from 'react'
import PropTypes from 'prop-types';
import appStore from './../stores/appStore'
import {view} from 'react-easy-state'


const ForecastLegendCell = ({type, handleClick}) => {    
    return (
        <div 
            data-type={type}
            onClick={handleClick} 
            className={`legend-cell ${type}`}
        >
            {type}
        </div>
    )
}

ForecastLegendCell.propTypes = {
      type:        PropTypes.string.isRequired
    , handleClick: PropTypes.func.isRequired
}

export default view(ForecastLegendCell)