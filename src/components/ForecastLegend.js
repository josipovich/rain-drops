import React from 'react'


export default ({weatherTypeList}) => {
    const types = ['legend', ...weatherTypeList]
    const LegendCell = ({type}) => <div className={`legend-cell ${type}`}>{type}</div>
    const LegendCells = types.map((type, i) => <LegendCell key={i} type={type}/>)

    return (
        <div className="forecast-legend">
            {LegendCells}
        </div>
    )
}
