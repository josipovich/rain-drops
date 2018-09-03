import React from 'react'
import {view} from 'react-easy-state'
import appStore from './../stores/appStore'
import Loading from './Loading'
import Form from './Form'
import Results from './Results'
import './../styles/App.css'


const App = () => {
    const isLoading = appStore.forecastInProgress || appStore.currentInProgress
    const showResults = appStore.current && appStore.forecast

    return (
        <div className="App">
            <React.StrictMode>
                <Form 
                    handleSubmit={appStore.handleSubmit}
                    handleChange={appStore.handleCityNameChange}
                />
                { showResults ? 
                    <Results      
                        // Results
                        statuses={[`${appStore.current.cod}`, `${appStore.forecast.cod}`]}
                        // Current
                        current={appStore.current}
                        cityName={appStore.current.name} 
                        location={[
                            appStore.current.coord ? appStore.current.coord.lat : 0, 
                            appStore.current.coord ? appStore.current.coord.lon : 0
                        ]}                        
                        // Forecast
                        forecast={appStore.forecast}                   
                        sunrise={appStore.current.sys ? appStore.current.sys.sunrise : 0}
                        sunset={appStore.current.sys ? appStore.current.sys.sunset : 0}
                        weatherTypeList={appStore.weatherTypeList}                        
                        selectedType={appStore.selectedType}
                        selectedForecast={appStore.selectedForecast}
                        handleLegendClick={appStore.handleLegendClick}
                        handleForecastItemClick={appStore.handleForecastItemClick}
                        handleForecastDetailsClose={appStore.handleForecastDetailsClose}
                        showForecastDetail={appStore.showForecastDetail}
                        // Warning
                        message={appStore.current.message} 
                    /> : '' }
                { isLoading ? <Loading /> : '' }
            </React.StrictMode>
        </div>
    )
}

export default view(App)
