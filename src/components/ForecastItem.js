import React from 'react'
import moment from 'moment'
import capitalize from './../lib/capitalize'


export default (props) => {
    const data = props.forecast
    const locale = navigator.languages[0] || navigator.language || 'en-GB'
    const timeFormatted = moment.unix(data.dt).local(locale).format('h a')
    const temp = `${data.main.temp.toFixed(0)}`
    const descShort = `${capitalize(data.weather[0].main)}:`
    const descLong = capitalize(data.weather[0].description)
    const weatherClass = data.weatherClass

    return (
        <div className={`forecast-item ${weatherClass}`}>
            <div className="forecast-time">{timeFormatted}</div>
            <div className="forecast-temp">{temp}<span className="forecast-temp-unit">°C</span></div>
            <div className="forecast-description">
                {descShort}
                <br />{descLong}
            </div>
        </div>
    )
}
