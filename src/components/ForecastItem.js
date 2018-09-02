import React from 'react'
import moment from 'moment'
import capitalize from './../lib/capitalize'


export default ({forecast}) => {
    const locale = navigator.languages[0] || navigator.language || 'en-GB'
    const timeFormatted = moment.unix(forecast.dt).local(locale).format('h a')
    const temp = `${forecast.main.temp.toFixed(0)}`
    const descShort = `${capitalize(forecast.weather[0].main)}:`
    const descLong = capitalize(forecast.weather[0].description)
    const weatherClass = forecast.weatherClass
    const night = forecast.daylight ? "" : 'night'

    return (
        <div className={`forecast-item ${weatherClass} ${night}`}>
            <div className="forecast-time">{timeFormatted}</div>
            <div className="forecast-temp">{temp}<span className="forecast-temp-unit">°C</span></div>
            <div className="forecast-description">
                {descShort}
                <br />{descLong}
            </div>
        </div>
    )
}
