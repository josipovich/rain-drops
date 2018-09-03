import React from 'react'
import {view} from 'react-easy-state'
import appStore from './../stores/appStore'
import Loading from './Loading'
import ForecastWeather from './ForecastWeather' 
import CurrentWeather from './CurrentWeather' 
import Form from './Form'
import Results from './Results'
import './../styles/App.css'


const App = () => {
    const as = appStore
    const isLoading = as.forecastInProgress || as.currentInProgress
    const showResults = as.current && as.forecast

    return (
        <div className="App">
            <React.StrictMode>
                <Form 
                    handleSubmit={as.handleSubmit}
                    handleChange={as.handleCityNameChange} />                    
                { showResults 
                    ? <Results      
                        statuses={[`${as.current.cod}`, `${as.forecast.cod}`]}
                        message={as.current.message} >
                        <CurrentWeather 
                            current={as.current}
                            cityName={as.current.name} 
                            location={[
                                as.current.coord ? as.current.coord.lat : 0, 
                                as.current.coord ? as.current.coord.lon : 0
                            ]} />
                        <ForecastWeather
                            forecast={as.forecast}                   
                            legendTypeList={as.legendTypeList}                        
                            selectedLegendType={as.selectedLegendType}
                            selectedForecast={as.selectedForecast}
                            handleLegendClick={as.handleLegendClick}
                            handleForecastItemClick={as.handleForecastItemClick}
                            handleForecastDetailsClose={as.handleForecastDetailsClose}
                            showForecastDetail={as.showForecastDetail} />   
                    </Results> : '' 
                }
                { isLoading ? <Loading /> : '' }
            </React.StrictMode>
        </div>
    )
}

export default view(App)
