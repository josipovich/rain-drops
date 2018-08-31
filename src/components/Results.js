import React from 'react'
import appStore from './../stores/appStore'
import Current from './Current'
import Forecast from './Forecast'
import CityMap from './CityMap'
import './../styles/Results.css'


const Warning = () => <span>No city with that name found!</span>

const Results = () => {
    const cityName = appStore.current.name
    const location = [appStore.current.coord.lat, appStore.current.coord.lon]    
    return (
        <div className="results">
            <div className="results-top-row">
                <CityMap cityName={cityName} location={location} />
                <Current current={appStore.current} />
            </div>
            <Forecast forecast={appStore.forecast} />
        </div>	
    )
}

export default props => {
    const somethingWentWrong =
        appStore.current.cod === '404' || appStore.forecast.cod === '404'

    return somethingWentWrong ? <Warning /> : <Results />
}
