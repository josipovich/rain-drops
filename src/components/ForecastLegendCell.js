import React from 'react'
import PropTypes from 'prop-types';
import appStore from './../stores/appStore'
import {view} from 'react-easy-state'


const ForecastLegendCell = ({type}) => {
    const _handleClick = (e) => {
        e.preventDefault()
        const type = e.target.dataset.type   
        if (type === 'legend') return
        appStore.selectedType = type
    }
    
    return (
        <div 
            data-type={type}
            onClick={_handleClick} 
            className={`legend-cell ${type}`}
        >
            {type}
        </div>
    )
}

ForecastLegendCell.propTypes = {
    type: PropTypes.string.isRequired
}

export default view(ForecastLegendCell)