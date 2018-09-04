import React from 'react'
import {view} from 'react-easy-state'
import appStore from './../stores/appStore'
import Loading from './Loading'
import ForecastWeather from './ForecastWeather' 
import CurrentWeather from './CurrentWeather' 
import Form from './Form'
import Results from './Results'
import About from './About'
import './../styles/App.css'


const App = () => {
    const {
          appName
        , current
        , currentWeatherHeaderText
        , forecast
        , forecastWeatherHeaderText
        , legendTypeList
        , selectedLegendType
        , selectedForecast
        , showForecastDetail
        , aboutHeaderText
        , forecastInProgress
        , currentInProgress
    } = appStore
    const isLoading = forecastInProgress || currentInProgress
    const showResults = current && forecast

    return (
        <div className="App">
            <React.StrictMode>
                <h1>{appName}</h1>
                <Form />
                { showResults
                    ? <Results
                        statuses={[`${current.cod}`, `${forecast.cod}`]}
                        message={current.message} >
                        <CurrentWeather 
                            headerText={currentWeatherHeaderText}
                            data={current}
                            cityName={current.name}
                            location={[
                                current.coord ? current.coord.lat : 0,
                                current.coord ? current.coord.lon : 0
                            ]} />
                        <ForecastWeather
                            data={forecast}
                            headerText={forecastWeatherHeaderText}
                            legendTypeList={legendTypeList}
                            selectedLegendType={selectedLegendType}
                            selectedData={selectedForecast}
                            showForecastDetail={showForecastDetail} />
                    </Results> : '' 
                }
                <About
                    appName={appName}
                    headerText={aboutHeaderText} />
                { isLoading ? <Loading /> : '' }
            </React.StrictMode>
        </div>
    )
}

export default view(App)
