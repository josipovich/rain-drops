import React from 'react'
import appStore from './stores/appStore'
import './Form.css';


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
        className='search-form__input' 
        placeholder="Type in the city name..." 
        type="text" 
        onChange={handleChange} 
      />
      <input 
        className='search-form__button' 
        type="submit" 
        value="Get Weather" 
      />
    </form>  
  )
}
