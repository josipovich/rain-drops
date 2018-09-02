import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import ForecastItem from './ForecastItem'
import ForecastLegend from './ForecastLegend'
import {weatherCodeToWeatherClass, isDaylight, unixToHours} from './../lib/utils'
import './../styles/Forecast.css'


const _groupForecastListByDay = (forecastList, sunrise, sunset) => {
    return _.chain(forecastList)
    // extend data so we can easier group forecasts
    // and also use that info for styling
    .map(data => {
        const weatherClass = weatherCodeToWeatherClass(data.weather[0].id)
        const day = moment.unix(data.dt).format('dddd')
        const daylight = isDaylight(
            unixToHours(data.dt), 
            unixToHours(sunrise), 
            unixToHours(sunset)
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

export default (props) => {
    const groupedForecasts = _groupForecastListByDay(props.forecast.list, props.sunrise, props.sunset)
    const forecastItems = _groupedForecastsToComponents(groupedForecasts)

    return (
        <div className="forecast-weather">
            <ForecastLegend weatherTypeList={props.weatherTypeList}/>
            <div className="forecast-items">
                {forecastItems}
            </div>
        </div>
    )
}
