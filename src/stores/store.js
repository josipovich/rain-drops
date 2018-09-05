import { combineReducers } from 'redux'
import forecast from './../reducers/forecast'
import current from './../reducers/current'
import initialState from './initialState'
import { createStore } from 'redux'



const store = createStore(combineReducers({
       forecast
     , current 
    //  , cityName: (store = {}) => store
     , appName: (store = {}) => store
}), initialState)

export default store