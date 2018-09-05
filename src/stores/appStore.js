import {store} from 'react-easy-state'
import fetchWeather from '../lib/fetchWeather'
import {statusOk} from '../lib/utils'


const _setLoadingTo = (isLoading, store) => {
    store.setField('currentInProgress', isLoading, store) 
    store.setField('forecastInProgress', isLoading, store)
}

const _handleResponse = (store) => {
    return (data) => {
        const responseOk = statusOk(data.map(d => d.cod)) 
        store.setField('showForecastDetail', false, store) 
        if (responseOk) {            
            data.forEach(data => {  
                const type = data.list ? 'forecast' : 'current'
                store.setField(type, data, store) 
                store.setField(`${type}InProgress`, false, store)                   
            })
            store.setField('selectedLegendType', '', store) 
        } else {
            // data[0] b/c we don't care about mapping since both are the same in this case
            store.setField('current', data[0], store) 
            store.setField('forecast', data[0], store) 
            _setLoadingTo(false, store)
        }
        // console.log('current', store.current)
        // console.log('forecast', store.forecast)
    }
}

const _handleError = (store) => {
    return (err) => {
        console.error(`Ops! Perhaps check you url. ${err}`)
        const errMsg = {cod: '404', message: "Something went wrong"}
        store.setField('forecast', errMsg, store) 
        store.setField('current', errMsg, store) 
        _setLoadingTo(false, store)
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
        _setLoadingTo(true, store)

        Promise.all(fetchWeather(city)) // returns two promises
            .then(_handleResponse(store))
            .catch(_handleError(store))
    }   

    , setField(fieldName, value, store) {
        store[fieldName] = value
    }

    , setSelectedForecast(timestamp, store) {        
        const selectedForecast = store.forecast.list
            .find(data => `${data.dt}` === timestamp) || null   
        store.setField('selectedForecast', selectedForecast, store) 
        store.setField('showForecastDetail', true, store) 
    }
})

export default appStore
