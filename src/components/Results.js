import React from 'react'
import appStore from './../stores/appStore'
import CurrentWeather from './Current'
import ForecastWeather from './Forecast'
import Warning from './Warning'
import CityMap from './CityMap'
import './../styles/Results.css'


const somethingIsWrong = () => {
    // TODO: do this to actually check is it something else than 200, it will be nicer
    const cods = [`${appStore.current.cod}`, `${appStore.forecast.cod}`]
    const badCods = ['401', '404', '400']
    return cods.some(cod => badCods.includes(cod))
}          

export default () => {
    return somethingIsWrong() 
        ? <Warning message={appStore.current.message} />
        : (
            <div className="results">
                <div className="results-top-row">
                    <CityMap />
                    <CurrentWeather />
                </div>
                <ForecastWeather />        
            </div>
        )
}
