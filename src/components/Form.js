import React from 'react'
import {view} from 'react-easy-state'
import appStore from './../stores/appStore'
import './../styles/Form.css'


const Form = () => {
    const {setField, prevCityName, cityName, fetchWeather} = appStore

    const updateCityName = (e) => {
        setField('cityName', e.target.value, appStore)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (prevCityName !== cityName && cityName) {   
            fetchWeather(appStore, {city: cityName})            
        }        
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
                className='search-form-input'
                placeholder="Type in city name (eg 'London, US' or just 'london')..."
                type="text"
                onChange={updateCityName}
            />
            <input 
                className='search-form-button'
                type="submit"
                value="Get Weather"
            />
        </form>
    )
}

export default view(Form)
