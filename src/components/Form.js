import React from 'react'
import PropTypes from 'prop-types'
import { view } from 'react-easy-state'
import appStore from './../stores/appStore'
import './../styles/Form.css'


const Form = ({fetchData}) => {
    const updateCityName = (e) => {
        appStore.cityName = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (appStore.prevCityName !== appStore.cityName) {   
            fetchData({city: appStore.cityName})            
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

Form.propTypes = {
    fetchData: PropTypes.func.isRequired
}

export default view(Form)
