import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import appStore from './../stores/appStore'
import {capitalize} from './../lib/utils'
import {view} from 'react-easy-state'


const ForecastItem = ({forecast}) => {
    const timeFormatted = `${moment(forecast.dt*1000).format('HH:mm')}h`
    const temp = `${forecast.main.temp.toFixed(0)}`
    const descShort = `${capitalize(forecast.weather[0].main)}`
    const weatherClass = forecast.weatherClass
    const selected = forecast.selected ? 'selected' : ''
    const openForecastItem = (e) => {
        e.preventDefault()
        const timestamp = e.currentTarget.id
        appStore.selectedForecast = appStore.forecast.list
            .find(forecast => `${forecast.dt}` === timestamp) || null
        appStore.showForecastDetail = true
    }

    return (
        <div 
            id={forecast.dt}
            className={`forecast-item ${weatherClass} ${selected}`}
            onClick={openForecastItem}>
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
    forecast: PropTypes.shape({
          dt: PropTypes.number.isRequired
        , main: PropTypes.any.isRequired
        , weather: PropTypes.array.isRequired
        , selected: PropTypes.bool.isRequired
        , weatherClass: PropTypes.string.isRequired
    })
}

export default view(ForecastItem)
