import React from 'react'
import {view} from 'react-easy-state'
import moment from 'moment'
import appStore from '../stores/appStore'
import {capitalize} from './../lib/utils'
import './../styles/ForecastItemDetails.css'


const ForecastItemDetails = ({selectedForecast}) => {
    const timeFormatted = `${moment(selectedForecast.dt*1000).format('HH:mm')}h`
    const temp = `${selectedForecast.main.temp.toFixed(0)}`
    const descShort = `${capitalize(selectedForecast.weather[0].main)}:`
    const descLong = capitalize(selectedForecast.weather[0].description)
    const weatherClass = selectedForecast.weatherClass
    // const night = selectedForecast.daylight ? '' : 'night'
    const night = selectedForecast.daylight ? '' : ''
    const selected = selectedForecast.selected ? 'selected' : ''

    return (
        <div className="forecast-item-details">
            <div>
                <div className="forecast-time">{timeFormatted}</div>
                <div className="forecast-temp">{temp}<span className="forecast-temp-unit">°C</span></div>
                <div className="forecast-description">
                    {descShort}
                    <br />{descLong}
                </div>
            </div>
    
            <div onClick={appStore.handleForecastDetailsClose} className="close-forecast-item">X</div>
        </div>
    )
}

export default view(ForecastItemDetails)
