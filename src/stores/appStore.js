import {store} from 'react-easy-state'
import fetchWeather from '../lib/fetchWeather'
import {statusOk} from '../lib/utils'


const _handleResponse = (store) => {
    return (data) => {
        const responseOk = statusOk(data.map(d => d.cod)) 
        if (responseOk) {
            data.forEach(data => {  
                const type = data.list ? 'forecast' : 'current'
                store[type] = data
                store[`${type}InProgress`] = false                   
            })
            store.prevCityName = store.cityName
        } else {
            // data[0] b/c we don't care about mapping since both are the same in this case
            store.forecast = store.current = data[0]
            store.currentInProgress = store.forecastInProgress = false        
        }
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
    cityName: '',
    prevCityName: '',
    forecast: null,
    current: null,
    currentInProgress: false,
    forecastInProgress: false,
    weatherTypeList: ['clear', 'clouds', 'snow', 'rain', 'thunderstorm'],
    selectedType: '',

    fetchWeather (city) {
        appStore.currentInProgress = appStore.forecastInProgress = true

        Promise.all(fetchWeather(city)) // returns two promises
            .then(_handleResponse(appStore))
            .catch(_handleError(appStore))
    }
})

export default appStore
