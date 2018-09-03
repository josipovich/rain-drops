import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import {capitalize} from './../lib/utils'
import { view } from 'react-easy-state'


const ForecastItem = ({forecast}) => {
    const timeFormatted = `${moment(forecast.dt*1000).format('HH:mm')}h`
    const temp = `${forecast.main.temp.toFixed(0)}`
    const descShort = `${capitalize(forecast.weather[0].main)}:`
    const descLong = capitalize(forecast.weather[0].description)
    const weatherClass = forecast.weatherClass
    // const night = forecast.daylight ? '' : 'night'
    const night = forecast.daylight ? '' : ''
    const selected = forecast.selected ? 'selected' : ''

    return (
        <div className={`forecast-item ${weatherClass} ${night} ${selected}`}>
            <div className="forecast-time">{timeFormatted}</div>
            <div className="forecast-temp">{temp}<span className="forecast-temp-unit">°C</span></div>
            <div className="forecast-description">
                {descShort}
                <br />{descLong}
            </div>
        </div>
    )
}

ForecastItem.propTypes = {
    forecast: PropTypes.any.isRequired
}

export default view(ForecastItem)
