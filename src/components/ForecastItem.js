import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import appStore from './../stores/appStore'
import {capitalize} from './../lib/utils'
import {view} from 'react-easy-state'


const ForecastItem = ({data}) => {
    const {dt, main, weather, weatherClass, selected} = data
    const timeFormatted = `${moment(dt*1000).format('HH:mm')}h`
    const temp = `${main.temp.toFixed(0)}`
    const descShort = `${capitalize(weather[0].main)}`
    const isSelected = selected ? 'selected' : ''
    const openForecastItem = (e) => {
        e.preventDefault()
        const timestamp = e.currentTarget.id
        appStore.setSelectedForecast(timestamp, appStore)
    }

    return (
        <div 
            id={data.dt}
            className={`forecast-item ${weatherClass} ${isSelected}`}
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
    data: PropTypes.shape({
          dt: PropTypes.number.isRequired
        , main: PropTypes.any.isRequired
        , weather: PropTypes.array.isRequired
        , selected: PropTypes.bool.isRequired
        , weatherClass: PropTypes.string.isRequired
    })
}

export default view(ForecastItem)
