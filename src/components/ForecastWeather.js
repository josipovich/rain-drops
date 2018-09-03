import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import ForecastItems from './ForecastItems'
import ForecastLegend from './ForecastLegend'
import ForecastItemDetails from './ForecastItemDetails'
import './../styles/Forecast.css'


const ForecastWeather = props => (
    <div className="forecast-weather">
        <h1>Weather Forecast</h1>
        <ForecastLegend             
            handleLegendClick={props.handleLegendClick}
            legendTypeList={props.legendTypeList} />
        <ForecastItems
            forecast={props.forecast}
            selectedLegendType={props.selectedLegendType}
            handleForecastItemClick={props.handleForecastItemClick} />
        {props.showForecastDetail 
            ? <ForecastItemDetails 
                handleForecastDetailsClose={props.handleForecastDetailsClose}
                selectedForecast={props.selectedForecast} />
            : ''}
    </div>
)

ForecastWeather.propTypes = {
      forecast: PropTypes.any.isRequired
    , handleLegendClick: PropTypes.func.isRequired
    , legendTypeList: PropTypes.array.isRequired
    , selectedLegendType: PropTypes.string.isRequired
    , handleForecastItemClick: PropTypes.func.isRequired
    , handleForecastDetailsClose: PropTypes.func.isRequired
    , selectedForecast: PropTypes.any
}

export default view(ForecastWeather)
