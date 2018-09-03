import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import {capitalize} from './../lib/utils'
import {view} from 'react-easy-state'


const ForecastItem = ({forecast, handleForecastItemClick}) => {
    const timeFormatted = `${moment(forecast.dt*1000).format('HH:mm')}h`
    const temp = `${forecast.main.temp.toFixed(0)}`
    const descShort = `${capitalize(forecast.weather[0].main)}`
    const weatherClass = forecast.weatherClass
    const selected = forecast.selected ? 'selected' : ''

    return (
        <div 
            id={forecast.dt}
            className={`forecast-item ${weatherClass} ${selected}`}
            onClick={handleForecastItemClick}>
            <div>
                <div className="forecast-time">{timeFormatted}</div>
                <div className="forecast-temp">
                    {temp}
                    <span className="forecast-temp-unit">°C</span>
                </div>
                <div className="forecast-description">
                    {descShort}
                </div>
            </div>
        </div>
    )
}

ForecastItem.propTypes = {
    forecast: PropTypes.any.isRequired
    , handleForecastItemClick: PropTypes.func.isRequired
}

export default view(ForecastItem)
