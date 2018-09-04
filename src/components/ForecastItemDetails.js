import React from 'react'
import {view} from 'react-easy-state'
import PropTypes from 'prop-types'
import appStore from './../stores/appStore'
import moment from 'moment'
import {capitalize, angleToDirection} from './../lib/utils'
import './../styles/ForecastItemDetails.css'


const ForecastItemDetails = ({selectedForecast}) => {
    const f = selectedForecast
    const day = moment(f.dt*1000).format('dddd D. M. YYYY.')
    const timeFormatted = `${moment(f.dt*1000).format('HH:mm')}h`
    const temp = `${f.main.temp.toFixed(0)}`
    const descShort = `${capitalize(f.weather[0].main)}`
    const wind = `${angleToDirection(f.wind.deg)} Wind (${f.wind.speed} m/s)`
    const description = `${capitalize(f.weather[0].description)}`
    const pressure = `${f.main.pressure} hPa`
    const humidity = `${f.main.humidity}%`
    const rain = f.rain && f.rain['3h'] 
        ? f.rain['3h'].toFixed(2) + ' mm of rain (in 3h)' 
        : 'No rain (in 3h)'
    const closeForecastDetails = (e) => {
        e.preventDefault()
        appStore.showForecastDetail = false
    }

    return (
        <div 
            onClick={closeForecastDetails}
            className="forecast-item-details">
            <div className="forecast-item-details-wrapper">
                <div className="forecast-item-details-content">
                    <div className="forecast-info forecast-time">
                        Forecast for <br /> 
                        {timeFormatted} on {day}
                    </div>
                    <div className="forecast-info forecast-temp">
                        {temp}
                        <span className="forecast-temp-unit">°C</span>
                    </div>  
                    <div className="forecast-info label">{descShort}</div>
                    <div className="forecast-info forecast-description">
                        {description} with {wind}
                    </div>
                    <div className="forecast-info label">Pressure</div>
                    <div className="forecast-info forecast-pressure">{pressure}</div>
                    <div className="forecast-info label">Humidity</div>
                    <div className="forecast-info forecast-humidity">{humidity}</div>
                    <div className="forecast-info label">Rain</div>
                    <div className="forecast-info forecast-rain">{rain}</div>
                </div> 
                <div className="close-forecast-item">
                    <span role="img" aria-label="Close Icon">❌</span>
                </div>
            </div>
        </div>
    )
}

ForecastItemDetails.propTypes = {
    selectedForecast: PropTypes.shape({
          dt: PropTypes.number.isRequired
        , main: PropTypes.any.isRequired
        , weather: PropTypes.array.isRequired
        , main: PropTypes.shape({
                  humidity: PropTypes.number
                , pressure: PropTypes.number
                , temp: PropTypes.any
            })
        , wind: PropTypes.shape({
                  speed: PropTypes.number
                , deg: PropTypes.number
            })
    })
}

export default view(ForecastItemDetails)
