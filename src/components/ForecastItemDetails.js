import React from 'react'
import {view, store} from 'react-easy-state'
import PropTypes from 'prop-types'
import appStore from './../stores/appStore'
import moment from 'moment'
import {capitalize, angleToDirection} from './../lib/utils'
import './../styles/ForecastItemDetails.css'


const ForecastItemDetails = ({selectedData}) => {
    const {dt, main, weather, wind, rain} = selectedData
    const day = moment(dt*1000).format('dddd D. M. YYYY.')
    const timeFormatted = `${moment(dt*1000).format('HH:mm')}h`
    const temp = `${main.temp.toFixed(0)}`
    const descShort = `${capitalize(weather[0].main)}`
    const windData = `${angleToDirection(wind.deg)} Wind (${wind.speed} m/s)`
    const description = `${capitalize(weather[0].description)}`
    const pressureData = `${main.pressure} hPa`
    const humidityData = `${main.humidity}%`
    const rainData = rain && rain['3h'] 
        ? rain['3h'].toFixed(2) + ' mm of rain (in 3h)' 
        : 'No rain (in 3h)'
    const closeForecastDetails = (e) => {
        e.preventDefault()
        appStore.setField('showForecastDetail', false, appStore)
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
                        {description} with {windData}
                    </div>
                    <div className="forecast-info label">Pressure</div>
                    <div className="forecast-info forecast-pressure">{pressureData}</div>
                    <div className="forecast-info label">Humidity</div>
                    <div className="forecast-info forecast-humidity">{humidityData}</div>
                    <div className="forecast-info label">Rain</div>
                    <div className="forecast-info forecast-rain">{rainData}</div>
                </div> 
                <div className="close-forecast-item">
                    <span role="img" aria-label="Close Icon">❌</span>
                </div>
            </div>
        </div>
    )
}

ForecastItemDetails.propTypes = {
    selectedData: PropTypes.shape({
          dt: PropTypes.number.isRequired
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
