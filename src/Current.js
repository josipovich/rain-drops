import React from 'react'
import moment from 'moment'
import windAngleToDirection from './utils/windAngleToDirection'
import capitalize from './utils/capitalize'
import Field from './Field'
import './Current.css'


export default ({current}) => { 
	const city = `${current.name}, ${current.sys.country}`
	const temp = `${current.main.temp.toFixed(0)}` 
	const wind = `${windAngleToDirection(current.wind.deg)} Wind (${current.wind.speed} m/s)` 
	const description = `${capitalize(current.weather[0].main)}, ${capitalize(current.weather[0].description)}` 
	const locale = (navigator.languages[0] || navigator.language) || 'en-GB'
	const time = moment.unix(current.dt).local(locale)
	const timeFormatted = `${time.fromNow()} (${time.format('LT')})`  

	return (
		<div className="current-weather">
			<div className="city-name">{city}</div>
			<div className="temperature">
				<span className="temperature-val">{temp}</span>
				<span className="temperature-unit">°C</span>
			</div>	
			<div className="description">{description} With {wind}</div>
			<div className="measurement-time">Measured {timeFormatted}</div>
		</div>
	)
}