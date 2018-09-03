import React from 'react'
import PropTypes from 'prop-types';
import {view} from 'react-easy-state'


const ForecastLegendCell = ({type, handleLegendClick}) => {    
    return (
        <div 
            data-type={type}
            onClick={handleLegendClick} 
            className={`legend-cell ${type}`}>
            {type}
        </div>
    )
}

ForecastLegendCell.propTypes = {
      type: PropTypes.string.isRequired
    , handleLegendClick: PropTypes.func.isRequired
}

export default view(ForecastLegendCell)