import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import appStore from './../stores/appStore'
import ForecastItem from './ForecastItem'
import ForecastLegend from './ForecastLegend'
import codeToWeatherClass from './../lib/weatherCodeToWeatherClass'
import './../styles/Forecast.css'


const getHours = time => (new Date(time*1000)).getHours()

const getNightOrDay = (time, sunrise, sunset) => {    
    const isDay = getHours(time) > getHours(sunrise) 
        && getHours(time) < getHours(sunset)
        
    return isDay ? 'day' : 'night'
}

const groupForecastListByDay = forecastList => {
    return _.chain(forecastList)
    // extend data so we can easier group forecasts
    .map(data => {
        const weatherClass = codeToWeatherClass(data.weather[0].id)
        const day = moment.unix(data.dt).format('dddd')
        const nightOrDay = getNightOrDay(
            data.dt, 
            appStore.currentSunrise, 
            appStore.currentSunset
        )
        return { nightOrDay, weatherClass, day, ...data}
    })
    .groupBy('day')
    // to improve grouping
    .map((forecast, day) => ({forecast, day}))
    .value()
} 

const groupedForecastsToComponents = groupedForecast => {   
    console.log(groupedForecast) 
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

export default () => {
    const forecast = appStore.forecast
    const groupedForecasts = groupForecastListByDay(forecast.list)   
    const forecastItems = groupedForecastsToComponents(groupedForecasts)

    return (
        <div className="forecast-weather">
            <ForecastLegend />
            <div className="forecast-items">
                {forecastItems}
            </div>    
        </div>
    )
}
