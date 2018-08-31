import React from 'react'
import Current from './Current'
import Forecast from './Forecast'
import appStore from './stores/appStore'
import CityMap from './CityMap'
import './Results.css'

export default props => {
    return (
         appStore.current.cod === '404' || appStore.forecast.cod === '404'
            ? <span>No City with that name is found!</span> 
            : <div className="results">
                <div className="results-top-row">
                    <CityMap 
                        cityName={appStore.current.name} 
                        location={[appStore.current.coord.lat, appStore.current.coord.lon]} 
                    />
                    <Current current={appStore.current} />
                </div>
                <Forecast forecast={appStore.forecast} />
            </div>			
    )	
}
