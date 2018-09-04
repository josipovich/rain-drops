import {store} from 'react-easy-state'
import fetchWeather from '../lib/fetchWeather'
import {statusOk} from '../lib/utils'


const _handleResponse = (store) => {
    return (data) => {
        const responseOk = statusOk(data.map(d => d.cod)) 
        store.showForecastDetail = false
        if (responseOk) {            
            data.forEach(data => {  
                const type = data.list ? 'forecast' : 'current'
                store[type] = data
                store[`${type}InProgress`] = false                   
            })            
            store.selectedLegendType = ''
        } else {
            // data[0] b/c we don't care about mapping since both are the same in this case
            store.forecast = store.current = data[0]
            store.currentInProgress = store.forecastInProgress = false        
        }
        // console.log('current', store.current)
        // console.log('forecast', store.forecast)
    }
}

const _handleError = (store) => {
    return (err) => {
        console.error(`Ops! Perhaps check you url. ${err}`)
        store.current = store.forecast = {cod: '404', message: "Something went wrong"}
        store.currentInProgress = store.forecastInProgress = false    
    }
}

const appStore = store({ 
      cityName: ''
    , appName: 'RAIN DROPS'
    , forecast: null
    , current: null
    , currentWeatherHeaderText: 'Current Weather'
    , forecastWeatherHeaderText: 'Forecast'
    , aboutHeaderText: 'About'
    , currentInProgress: false
    , forecastInProgress: false
    , legendTypeList: ['clear', 'clouds', 'snow', 'rain', 'thunderstorm']
    , selectedLegendType: ''
    , selectedForecast: null
    , showForecastDetail: false

    , fetchWeather(store, city) {
        store.currentInProgress = store.forecastInProgress = true

        Promise.all(fetchWeather(city)) // returns two promises
            .then(_handleResponse(store))
            .catch(_handleError(store))
    }   

    /**
     * Sets value to the obj
     * @param   {Number} fieldName 0-360 angle 
     * @param   {Number} value 0-360 angle 
     * @param   {Number} store 0-360 angle 
     */
    , setField(fieldName, value, store) {
        store[fieldName] = value
    }

    , setSelectedForecast(timestamp, store) {        
        const selectedForecast = store.forecast.list
            // finds forecast with same timestamp
            .find(data => `${data.dt}` === timestamp) || null           
        store.selectedForecast = selectedForecast 
        store.showForecastDetail = true
    }

    , setCityName(store, value) {
        store.cityName = value
    }
})

export default appStore
