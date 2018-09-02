import React from 'react'
import appStore from './../stores/appStore'
import './../styles/Form.css'
import { view } from 'react-easy-state'


export default view(
    () => {
        const handleChange = (e) => {
            appStore.cityName = e.target.value
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
    
            if (appStore.prevCityName !== appStore.cityName) {   
                appStore.hoveredType = ''        
                appStore.fetchWeather({city: appStore.cityName})            
            }        
        }
    
        return (
            <form className='search-form' onSubmit={handleSubmit}>
                <input
                    className='search-form-input'
                    placeholder="Type in city name (eg 'London, US' or just 'london')..."
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
)
