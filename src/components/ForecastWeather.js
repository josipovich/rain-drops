import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import ForecastItems from './ForecastItems'
import ForecastLegend from './ForecastLegend'
import ForecastItemDetails from './ForecastItemDetails'
import './../styles/Forecast.css'


const ForecastWeather = props => (
    <div className="forecast-weather">
        <h1>{props.headerText}</h1>
        <ForecastLegend             
            selectedLegendType={props.selectedLegendType}
            legendTypeList={props.legendTypeList} />
        <ForecastItems
            data={props.data}
            selectedLegendType={props.selectedLegendType} />
        {props.showForecastDetail 
            ? <ForecastItemDetails selectedData={props.selectedData} />
            : ''}
    </div>
)

ForecastWeather.propTypes = {
      data: PropTypes.any.isRequired
    , legendTypeList: PropTypes.array.isRequired
    , selectedLegendType: PropTypes.string.isRequired
    , selectedData: PropTypes.any
    , headerText: PropTypes.string.isRequired
}

export default view(ForecastWeather)
