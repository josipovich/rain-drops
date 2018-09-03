import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {view} from 'react-easy-state'
import {weatherCodeToWeatherClass} from './../lib/utils'
import ForecastItem from './ForecastItem'
import ForecastLegend from './ForecastLegend'
import ForecastItemDetails from './ForecastItemDetails'
import './../styles/Forecast.css'


const _groupForecastListByDay = (forecast, selectedType) => {
    return _.chain(forecast.list)
    // extend data so we can easier group forecasts
    // and also use that info for styling
    .map(data => {
        const weatherClass = weatherCodeToWeatherClass(data.weather[0].id)
        const selected = selectedType === weatherClass
        const day = moment(data.dt*1000).format('dddd')
        return {weatherClass, day, selected, ...data}
    })
    .groupBy('day')
    // to improve grouping
    .map((forecast, day) => ({forecast, day}))
    .value()
} 

const _groupedForecastsToComponents = (groupedForecast, handleClick) => {   
    return groupedForecast.map((dayGroup, i) => {
        // change first day str to today 
        const dayName = i === 0 ? 'TODAY' : dayGroup.day.substr(0, 3).toUpperCase()
        const forecastsForThatDay = dayGroup.forecast.map((data, i) => {
            return <ForecastItem             
                key={i} 
                handleForecastItemClick={handleClick} 
                forecast={data} />
        })
        return (
            <div className="forecast-day" key={i}>
                <div className="day-name">{dayName}</div>
                {forecastsForThatDay}
            </div>
        )
    })
}

const Forecast = props => {
    const groupedForecasts = _groupForecastListByDay(props.forecast, props.selectedType)
    const forecastItems = _groupedForecastsToComponents(groupedForecasts, props.handleForecastItemClick)

    return (
        <div className="forecast-weather">
            <h1>Weather Forecast</h1>
            <ForecastLegend 
                handleLegendClick={props.handleLegendClick}
                weatherTypeList={props.weatherTypeList}
            />
            <div className="forecast-items">
                {forecastItems}
            </div>
            { props.showForecastDetail 
                    ? <ForecastItemDetails 
                        handleForecastDetailsClose={props.handleForecastDetailsClose}
                        selectedForecast={props.selectedForecast} />
                    :  ''
                }
        </div>
    )
}

Forecast.propTypes = {
      forecast: PropTypes.any.isRequired
    , handleLegendClick: PropTypes.func.isRequired
    , sunrise: PropTypes.number.isRequired
    , sunset: PropTypes.number.isRequired
    , weatherTypeList: PropTypes.array.isRequired
    , selectedType: PropTypes.string.isRequired
    , handleForecastDetailsClose: PropTypes.func.isRequired
}

export default view(Forecast)
