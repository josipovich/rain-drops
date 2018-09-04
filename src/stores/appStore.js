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
        console.log('current', store.current)
        console.log('forecast', store.forecast)
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
    , forecast: null
    , current: null
    , currentInProgress: false
    , forecastInProgress: false
    , legendTypeList: ['clear', 'clouds', 'snow', 'rain', 'thunderstorm']
    , selectedLegendType: ''
    , selectedForecast: null
    , showForecastDetail: false

    , fetchWeather(city) {
        appStore.currentInProgress = appStore.forecastInProgress = true

        Promise.all(fetchWeather(city)) // returns two promises
            .then(_handleResponse(appStore))
            .catch(_handleError(appStore))
    }
    
    , handleCityNameChange(e) {
        appStore.cityName = e.target.value
    }

    , handleSubmit(e) {
        e.preventDefault()
        if (appStore.prevCityName !== appStore.cityName) {   
            appStore.fetchWeather({city: appStore.cityName})            
        }        
    }

    , handleForecastItemClick(e) {
        e.preventDefault()
        e.stopPropagation()
        const timestamp = e.currentTarget.id
        appStore.selectedForecast = appStore.forecast.list
            .find(forecast => `${forecast.dt}` === timestamp) || null
        appStore.showForecastDetail = true
    }
})

export default appStore
