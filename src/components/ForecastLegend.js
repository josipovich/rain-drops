import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import ForecastLegendCell from './ForecastLegendCell'


const ForecastLegend = ({weatherTypeList}) => {
    // const types = ['legend', 'sundown', ...weatherTypeList]
    const types = ['legend', ...weatherTypeList]    
    const LegendCells = types.map((type, i) => <ForecastLegendCell key={i} type={type}/>)

    return (
        <div className="forecast-legend">
            {LegendCells}
        </div>
    )
}

ForecastLegend.propTypes = {
    weatherTypeList: PropTypes.array.isRequired
}

export default view(ForecastLegend)
