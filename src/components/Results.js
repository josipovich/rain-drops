import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import {statusOk} from './../lib/utils'
import Current from './Current'
import Forecast from './Forecast'
import Warning from './Warning'
import CityMap from './CityMap'
import './../styles/Results.css'


const Results = props => {    
    return statusOk(props.statuses)  
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
                    selectedForecast={props.selectedForecast}
                    showForecastDetail={props.showForecastDetail}
                    selectedForecast={props.selectedForecast}
                    handleClick={props.handleLegendClick}
                />        
            </div>
            )
        : <Warning message={props.message} />
}

Results.propTypes = {
      statuses:          PropTypes.array.isRequired
    , cityName:          PropTypes.string
    , location:          PropTypes.array
    , current:           PropTypes.any.isRequired
    , forecast:          PropTypes.any.isRequired
    , sunrise:           PropTypes.number.isRequired
    , sunset:            PropTypes.number.isRequired
    , weatherTypeList:   PropTypes.array.isRequired
    , selectedType:      PropTypes.string.isRequired
    , message:           PropTypes.string
    , handleLegendClick: PropTypes.func.isRequired
}

export default view(Results)
