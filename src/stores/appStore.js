import {store} from 'react-easy-state'
import fetchWeather from '../lib/fetchWeather'
import {statusOk} from '../lib/utils'


const _saveWeatherData = (store, data) => {
    data.forEach(data => {                    
        const type = data.list ? 'forecast' : 'current'
        store[type] = data
        store[`${type}InProgress`] = false 
        // take current sunrise and sunset for day/night 
        if (type === 'current') {
            store.currentSunrise = data.sys.sunrise
            store.currentSunset = data.sys.sunset
        }                            
    }) 
}

const _showSomething = (store, data) => {
    store.forecast = store.current = data[0]
    store.currentInProgress = store.forecastInProgress = false
}

const appStore = store({ 
    forecast: null,
    current: null,
    loadingText: 'Fetching Results...',
    currentInProgress: false,
    forecastInProgress: false,
    weatherTypeList: ['clear', 'clouds', 'snow', 'rain', 'thunderstorm'],

    fetchWeather (city) {
        appStore.currentInProgress = true
        appStore.forecastInProgress = true
        // returns two promises
        const weather = fetchWeather(city)
        Promise.all([weather.current, weather.forecast])
            .then(data =>{    
                const allFine = statusOk(data.map(d => d.cod)) 
                allFine ? _saveWeatherData(appStore, data) : _showSomething(appStore, data)             
            }).catch(err => {
                console.error(`Ops! Perhaps check you url. ${err}`)
                // '404' is not important, cod just has to be !== '200'
                appStore.current = appStore.forecast = {cod: '404', message: "Something went wrong"}
                appStore.currentInProgress = appStore.forecastInProgress = false
            })
    },
})

export default appStore
