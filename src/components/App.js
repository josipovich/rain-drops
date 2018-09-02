import React from 'react'
import {view} from 'react-easy-state'
import appStore from './../stores/appStore'
import Loading from './Loading'
import Form from './Form'
import Results from './Results'
import './../styles/App.css'


const App = () => {
    const isLoading = appStore.forecastInProgress || appStore.currentInProgress
    const showResults = appStore.current && appStore.forecast

    return (
        <div className="App">
            <Form />
            { showResults ? <Results /> : '' }
            { isLoading ? <Loading loadingText={appStore.loadingText} /> : '' }
        </div>
    )
}

export default view(App)
