import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import ForecastLegendCell from './ForecastLegendCell'


const ForecastLegend = ({legendTypeList, handleLegendClick}) => {
    // const types = ['legend', 'sundown', ...legendTypeList]
    const types = ['legend', ...legendTypeList]    
    const LegendCells = types.map((type, i) => (
        <ForecastLegendCell 
            handleLegendClick={handleLegendClick}
            key={i} 
            type={type}
        />
    ))

    return (
        <div className="forecast-legend">
            {LegendCells}
        </div>
    )
}

ForecastLegend.propTypes = {
      legendTypeList: PropTypes.array.isRequired
    , handleLegendClick: PropTypes.func.isRequired
}

export default view(ForecastLegend)
