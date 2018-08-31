import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import ForecastItem from './ForecastItem'
import codeToWeatherClass from './../lib/weatherCodeToWeatherClass'
import './../styles/Forecast.css'


const forecastListToComponents = forecastList => {
    return _.chain(forecastList)
        // extend data so we can easier group forecasts
        .map(data => {
            const weatherClass = codeToWeatherClass(data.weather[0].id)
            const day = moment.unix(data.dt).format('dddd')
            return {weatherClass, day, ...data}
        })
        .groupBy('day')
        // to improve grouping
        .map((forecast, day) => ({forecast, day}))        
        .map((dayGroup, i) => {
            // change first day str to today 
            const dayName = i === 0 ? 'TODAY' : dayGroup.day.substr(0, 3).toUpperCase()
            const forecastsForThatDay = dayGroup.forecast.map((data, i) => {
                return <ForecastItem key={i} forecast={data} />
            })
            return (
                <div className="forecast-day" key={i}>
                    <div className="day-name">{dayName}</div>
                    {forecastsForThatDay}
                </div>
            )
        })
        .value()
}

export default ({forecast}) => {
    const forecastItems = forecastListToComponents(forecast.list)

    return (
        <div className="forecast-weather">
            {forecastItems}
        </div>
    )
}