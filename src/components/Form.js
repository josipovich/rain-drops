import React from 'react'
import appStore from './../stores/appStore'
import './../styles/Form.css'


export default () => {
    const handleChange = (e) => {
        appStore.cityName = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        appStore.fetchCurrent({city: appStore.cityName})
        appStore.fetchForecast({city: appStore.cityName})
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
                className='search-form-input'
                placeholder="Type in the city name..."
                type="text"
                onChange={handleChange}
            />
            <input 
                className='search-form-button'
                type="submit"
                value="Get Weather"
            />
        </form>
    )
}
