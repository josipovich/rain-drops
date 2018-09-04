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
    const s = appStore
    const isLoading = s.forecastInProgress || s.currentInProgress
    const showResults = s.current && s.forecast

    return (
        <div className="App">
            <React.StrictMode>
                <Form fetchData={s.fetchWeather} />                    
                { showResults 
                    ? <Results      
                        statuses={[`${s.current.cod}`, `${s.forecast.cod}`]}
                        message={s.current.message} >
                        <CurrentWeather 
                            current={s.current}
                            cityName={s.current.name} 
                            location={[
                                s.current.coord ? s.current.coord.lat : 0, 
                                s.current.coord ? s.current.coord.lon : 0
                            ]} />
                        <ForecastWeather
                            forecast={s.forecast}                   
                            legendTypeList={s.legendTypeList}                        
                            selectedLegendType={s.selectedLegendType}
                            selectedForecast={s.selectedForecast}
                            showForecastDetail={s.showForecastDetail} />   
                    </Results> : '' 
                }
                <About />
                { isLoading ? <Loading /> : '' }
            </React.StrictMode>
        </div>
    )
}

export default view(App)
