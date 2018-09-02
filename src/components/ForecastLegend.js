import React from 'react'
import appStore from './../stores/appStore'
import {view} from 'react-easy-state'


const LegendCell = ({type}) => {
    const _handleClick = (e) => {
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


export default view(
    ({weatherTypeList}) => {
        // const types = ['legend', 'sundown', ...weatherTypeList]
        const types = ['legend', ...weatherTypeList]    
        const LegendCells = types.map((type, i) => <LegendCell key={i} type={type}/>)
    
        return (
            <div className="forecast-legend">
                {LegendCells}
            </div>
        )
    }
)
