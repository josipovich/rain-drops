import { store } from 'react-easy-state'
import fetchWeather from '../lib/fetchWeather'

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
                // TODO: add condition before  looping
                data.forEach(data => {                    
                    if (`${data.cod}` === '200') {
                        const type = data.list ? 'forecast' : 'current'
                        console.log(data)
                        appStore[type] = data
                        appStore[`${type}InProgress`] = false  
                        if (type === 'current') {
                            appStore.currentSunrise = data.sys.sunrise
                            appStore.currentSunset = data.sys.sunset
                        }
                    } else {
                        appStore.forecast = appStore.current = data
                        appStore.currentInProgress = appStore.forecastInProgress = false
                    }                 
                })            
            }).catch(err => {
                console.error(`Ops! Perhaps check you url. ${err}`)
                appStore.current = appStore.forecast = {cod: '404', message: "Something went wrong"}
                appStore.currentInProgress = appStore.forecastInProgress = false
            })
    }

})

export default appStore