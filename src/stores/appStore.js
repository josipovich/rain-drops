import { store } from 'react-easy-state'
import fetchWeather from '../utils/fetchWeather'

const appStore = store({ 
    forecast: undefined,
    current: null,
    loadingText: 'Loading...',
    dots: '...',
      
    async fetchCurrent (city) {
        appStore.loading = true
        let response = await fetchWeather(city).current
        let current = response ? await response.json() : null
        appStore.current = current    
        appStore.loading = false
    },

    async fetchForecast (city) {
        appStore.loading = true
        let response = await fetchWeather(city).forecast
        let forecast = response ? await response.json() : null
        appStore.forecast = forecast    
        console.log('forecast', forecast)
        appStore.loading = false
    }
})

export default appStore