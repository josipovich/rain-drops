import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {view} from 'react-easy-state'
import {angleToDirection, capitalize} from './../lib/utils'
import CityMap from './CityMap'
import './../styles/Current.css'


const Current = ({current, cityName, location}) => {
    const c = current
    const city = `${c.name}, ${c.sys.country}`
    const temp = `${c.main.temp.toFixed(0)}`
    const wind = `${angleToDirection(c.wind.deg)} Wind (${c.wind.speed} m/s)`
    const description = `${capitalize(c.weather[0].main)}, ${capitalize(c.weather[0].description)}`
    const time = moment(c.dt*1000)
    const timeFormatted = `Measured ${capitalize(time.fromNow())} (${time.format('HH:mm')}h)`

    return (
        <div className="current-weather">
            <h1>Current Weather</h1>
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
                <div className="description">{description} With {wind}</div>
                <div className="measurement-time">{timeFormatted}</div>
            </div>
        </div>
    )
}

Current.propTypes= {
    current: PropTypes.any.isRequired
    , cityName: PropTypes.string.isRequired
    , location: PropTypes.array.isRequired
}


export default view(Current)
