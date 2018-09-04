import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import initialState from './stores/initialState'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import './styles/index.css'


const store = createStore(rootReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

registerServiceWorker()
