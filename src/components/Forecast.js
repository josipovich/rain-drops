import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import ForecastItem from './ForecastItem'
import ForecastLegend from './ForecastLegend'
import codeToWeatherClass from './../lib/weatherCodeToWeatherClass'
import './../styles/Forecast.css'


const getHours = time => (new Date(time*1000)).getHours()

const isDaylight = (time, sunrise, sunset) => {    
    const daylight = getHours(time) > getHours(sunrise) 
        && getHours(time) < getHours(sunset)
        
    return daylight 
}

const groupForecastListByDay = (forecastList, sunrise, sunset) => {
    return _.chain(forecastList)
    // extend data so we can easier group forecasts
    .map(data => {
        const weatherClass = codeToWeatherClass(data.weather[0].id)
        const day = moment.unix(data.dt).format('dddd')
        const daylight = isDaylight(data.dt, sunrise, sunset)
        return {daylight, weatherClass, day, ...data}
    })
    .groupBy('day')
    // to improve grouping
    .map((forecast, day) => ({forecast, day}))
    .value()
} 

const groupedForecastsToComponents = groupedForecast => {   
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
    const groupedForecasts = groupForecastListByDay(props.forecast.list, props.sunrise, props.sunset)
    const forecastItems = groupedForecastsToComponents(groupedForecasts)

    return (
        <div className="forecast-weather">
            <ForecastLegend weatherTypeList={props.weatherTypeList}/>
            <div className="forecast-items">
                {forecastItems}
            </div>
        </div>
    )
}
