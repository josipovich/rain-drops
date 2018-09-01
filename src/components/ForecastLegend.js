import React from 'react'
import appStore from './../stores/appStore'


export default () => {
    const types = ['legend', ...appStore.weatherTypeList]
    const LegendCell = ({type}) => <div className={`legend-cell ${type}`}>{type}</div>
    const LegendCells = types.map((type, i) => <LegendCell key={i} type={type}/>)

    return (
        <div className="forecast-legend">
            {LegendCells}
        </div>
    )
}
