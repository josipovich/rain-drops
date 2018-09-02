import React from 'react'
import appStore from './../stores/appStore'
import {view} from 'react-easy-state'
import {statusOk} from './../lib/utils'
import Current from './Current'
import Forecast from './Forecast'
import Warning from './Warning'
import CityMap from './CityMap'
import './../styles/Results.css'


export default view(
    () => {    
        const showWarning = statusOk([`${appStore.current.cod}`, `${appStore.forecast.cod}`]) 
        return showWarning 
            ? (
                <div className="results">
                    <div className="results-top-row">
                        <CityMap 
                            cityName={appStore.current.name} 
                            location={[appStore.current.coord.lat, appStore.current.coord.lon]} 
                        />
                        <Current current={appStore.current} />
                    </div>
                    <Forecast
                        forecast={appStore.forecast} 
                        current={appStore.current.sys.sunrise}
                        sunset={appStore.current.sys.sunset}
                        weatherTypeList={appStore.weatherTypeList}
                        hoveredType={appStore.hoveredType}
                    />        
                </div>
                )
            : <Warning message={appStore.current.message} />
    }
)
