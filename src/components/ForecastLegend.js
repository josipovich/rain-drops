import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import appStore from './../stores/appStore'


const ForecastLegend = ({legendTypeList, selectedLegendType}) => {  
    const setSelectedLegendType = (e) => {
        e.preventDefault()
        const type = e.target.dataset.type   
        if (type === 'legend') return
        appStore.selectedLegendType = type
    }

    const types = ['legend', ...legendTypeList]  
    const LegendCells = types.map((type, i) => {
        const selected = selectedLegendType === type 
        return (
            <div
                data-type={type}
                className={`legend-cell ${type} ${selected ? 'selected' : ''}`}
                onClick={setSelectedLegendType} 
                key={i} >
                
                {type}
            </div>
        )
    })

    return (
        <div className="forecast-legend">
            {LegendCells}
        </div>
    )
}

ForecastLegend.propTypes = {
      legendTypeList: PropTypes.array.isRequired
    , selectedLegendType: PropTypes.string
}

export default view(ForecastLegend)
