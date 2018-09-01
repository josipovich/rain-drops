import React, {Component} from 'react'
import {view} from 'react-easy-state'
import Loading from './Loading'
import Form from './Form'
import Results from './Results'
import appStore from './../stores/appStore'
import './../styles/App.css'


class App extends Component {
    constructor(){
        super()
        appStore.fetchWeather({city: 'Berlin'})
    }

    render() {
        const isLoading = appStore.forecastInProgress || appStore.currentInProgress
        const showResults = appStore.current && appStore.forecast

        return (
            <div className="App">
                <Form />
                { showResults ? <Results /> : '' }
                { isLoading ? <Loading /> : '' }
            </div>
        )
    }
}

export default view(App)
