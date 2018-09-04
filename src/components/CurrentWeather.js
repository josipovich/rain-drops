import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {view} from 'react-easy-state'
import {angleToDirection, capitalize} from './../lib/utils'
import CityMap from './CityMap'
import './../styles/CurrentWeather.css'


const CurrentWeather = ({data, cityName, location, headerText}) => {
    const {name, sys, main, wind, weather, dt} = data
    const city = `${name}, ${sys.country}`
    const temp = `${main.temp.toFixed(0)}`
    const windData = `${angleToDirection(wind.deg)} Wind (${wind.speed} m/s)`
    const description = `${capitalize(weather[0].main)}, ${capitalize(weather[0].description)}`
    const time = moment(dt*1000)
    const timeFormatted = `Measured ${capitalize(time.fromNow())} (${time.format('HH:mm')}h)`

    return (
        <div className="current-weather">
            <h1>{headerText}</h1>
            <CityMap 
                cityName={cityName} 
                location={location} 
            />
            <div className="current-weather-info">
                <div className="city-name">{city}</div>
                <div className="temperature">
                    <span className="temperature-val">{temp}</span>
                    <span className="temperature-unit">°C</span>
                </div>	
                <div className="description">{description} With {windData}</div>
                <div className="measurement-time">{timeFormatted}</div>
            </div>
        </div>
    )
}

CurrentWeather.propTypes= {
    data: PropTypes.shape({
          cod: PropTypes.oneOfType([
                PropTypes.string
                , PropTypes.number
            ])
        , message: PropTypes.string
      })
    , cityName: PropTypes.string
    , location: PropTypes.array.isRequired
    , headerText: PropTypes.string.isRequired
}

export default view(CurrentWeather)
