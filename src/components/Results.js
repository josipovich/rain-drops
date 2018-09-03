import React from 'react'
import PropTypes from 'prop-types'
import {view} from 'react-easy-state'
import {statusOk} from './../lib/utils'
import Current from './Current'
import Forecast from './Forecast'
import Warning from './Warning'
import './../styles/Results.css'


const Results = props => {    
    return statusOk(props.statuses)  
        ? (
            <div className="results">
                <div className="results-top-row">
                    <Current 
                        current={props.current}
                        cityName={props.cityName} 
                        location={props.location}  
                    />
                </div>
                <Forecast
                    forecast={props.forecast} 
                    sunrise={props.sunrise}
                    sunset={props.sunset}
                    weatherTypeList={props.weatherTypeList}
                    selectedType={props.selectedType}
                    showForecastDetail={props.showForecastDetail}
                    selectedForecast={props.selectedForecast}
                    handleLegendClick={props.handleLegendClick}
                    handleForecastItemClick={props.handleForecastItemClick}
                    handleForecastDetailsClose={props.handleForecastDetailsClose}
                />        
            </div>
            )
        : <Warning message={props.message} />
}

Results.propTypes = {
      statuses: PropTypes.array.isRequired
    , cityName: PropTypes.string
    , location: PropTypes.array
    , current: PropTypes.any.isRequired
    , forecast: PropTypes.any.isRequired
    , sunrise: PropTypes.number.isRequired
    , sunset: PropTypes.number.isRequired
    , weatherTypeList: PropTypes.array.isRequired
    , selectedType: PropTypes.string.isRequired
    , message: PropTypes.string
    , handleForecastItemClick: PropTypes.func.isRequired
    , showForecastDetail: PropTypes.bool.isRequired
    , selectedForecast: PropTypes.any
    , handleLegendClick: PropTypes.func.isRequired
    , handleForecastDetailsClose: PropTypes.func.isRequired
}

export default view(Results)
