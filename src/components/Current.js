import React from 'react'
import moment from 'moment'
import {angleToDirection, capitalize} from './../lib/utils'
import './../styles/Current.css'


export default ({current}) => {
    const city = `${current.name}, ${current.sys.country}`
    const temp = `${current.main.temp.toFixed(0)}`
    const wind = `${angleToDirection(current.wind.deg)} Wind (${current.wind.speed} m/s)`
    const description = `${capitalize(current.weather[0].main)}, ${capitalize(current.weather[0].description)}`
    const time = moment(current.dt*1000)
    const timeFormatted = `Measured ${capitalize(time.fromNow())} (${time.format('HH:mm')}h)`

    return (
        <div className="current-weather">
            <div className="city-name">{city}</div>
            <div className="temperature">
                <span className="temperature-val">{temp}</span>
                <span className="temperature-unit">°C</span>
            </div>	
            <div className="description">{description} With {wind}</div>
            <div className="measurement-time">{timeFormatted}</div>
        </div>
    )
}
