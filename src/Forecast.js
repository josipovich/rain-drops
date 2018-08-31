import React from 'react'
import moment from 'moment'
import './Forecast.css'
import capitalize from './utils/capitalize'
import codeToWeatherClass from './utils/codeToWeatherClass'
import _ from 'lodash'

const ForecastItem = (props) => {
    const data = props.forecast
    // check this
    const locale = (navigator.languages[0] || navigator.language) || 'en-GB'
	const time = moment.unix(data.dt).local(locale)
    const timeFormatted = `${time.format('h a')}`  
    const temp = `${data.main.temp.toFixed(0)}`
    const descShort = `${capitalize(data.weather[0].main)}` 
    const descLong = `${capitalize(data.weather[0].description)}` 
    const weatherClass = `${data.weatherClass}`

    return (
        <div className={`forecast-item ${weatherClass}`}>
            <div className="forecast-time">{timeFormatted}</div>
            <div className="forecast-temp">{temp}<span className="forecast-temp-unit">°C</span></div>
            <div className="forecast-description">
                {descShort}:
                <br />{descLong}
            </div>
        </div>
    )
}

export default function Forecast({forecast}) {
    const forecastItems = _.chain(forecast.list)
        .map(data => {
            const weatherClass = codeToWeatherClass(data.weather[0].id)
            const day = moment.unix(data.dt).format('dddd')
            return {weatherClass, day, ...data}
        })
        .groupBy('day')
        .map((forecast, day) => ({forecast, day}))
        .value()
        .map((group, i)=>{
            let groupDay = i === 0 ? 'TODAY' : group.day.substr(0, 3).toUpperCase()
            const forecastsForThatDay = group.forecast.map((data, i) => {
                return <ForecastItem key={i} forecast={data} />
            })
            return (
                <div className="forecast-day" key={i}>
                    <div className="day-name">{groupDay}</div>
                    {forecastsForThatDay}
                </div>            
            )
        })    
        
    return (
        <div className="forecast-weather">
            {forecastItems}
        </div>
    )
} 