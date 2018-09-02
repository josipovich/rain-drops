import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import suncalc from 'suncalc'
import ForecastItem from './ForecastItem'
import ForecastLegend from './ForecastLegend'
import {weatherCodeToWeatherClass, isDaylight, unixToHours} from './../lib/utils'
import './../styles/Forecast.css'


const _groupForecastListByDay = (forecast, sunrise, sunset) => {
    return _.chain(forecast.list)
    // extend data so we can easier group forecasts
    // and also use that info for styling
    .map(data => {
        const weatherClass = weatherCodeToWeatherClass(data.weather[0].id)
        const day = moment(data.dt*1000).format('dddd')
        const daylight = isDaylight(
            moment(data.dt*1000).format('HH'), 
            moment(sunrise*1000).format('HH'), 
            moment(sunset*1000).format('HH')
        )
        return {daylight, weatherClass, day, ...data}
    })
    .groupBy('day')
    // to improve grouping
    .map((forecast, day) => ({forecast, day}))
    .value()
} 

const _groupedForecastsToComponents = groupedForecast => {   
    return groupedForecast.map((dayGroup, i) => {
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
}

export default ({forecast, sunrise, sunset, weatherTypeList}) => {
    const groupedForecasts = _groupForecastListByDay(forecast, sunrise, sunset)
    const forecastItems = _groupedForecastsToComponents(groupedForecasts)

    return (
        <div className="forecast-weather">
            <ForecastLegend weatherTypeList={weatherTypeList}/>
            <div className="forecast-items">
                {forecastItems}
            </div>
        </div>
    )
}
