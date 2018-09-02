import React from 'react'
import appStore from './../stores/appStore'
import {view} from 'react-easy-state'
import {statusOk} from './../lib/utils'
import Current from './Current'
import Forecast from './Forecast'
import Warning from './Warning'
import CityMap from './CityMap'
import './../styles/Results.css'


// export default view(

const Results = (props) => {    
    return statusOk(props.cods)  
        ? (
            <div className="results">
                <div className="results-top-row">
                    <CityMap 
                        cityName={props.cityName} 
                        location={props.location} 
                    />
                    <Current current={props.current} />
                </div>
                <Forecast
                    forecast={props.forecast} 
                    sunrise={props.sunrise}
                    sunset={props.sunset}
                    weatherTypeList={props.weatherTypeList}
                    selectedType={props.selectedType}
                />        
            </div>
            )
        : <Warning message={props.message} />
}

export default Results
