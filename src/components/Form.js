import React from 'react'
import appStore from './../stores/appStore'
import './../styles/Form.css'
import { connect } from 'react-redux'
import { setCityName } from '../actions'


const mapStateToProps = state => ({
    cityName: state.cityName
  })

const mapDispatchToProps = dispatch => ({
    setCityName: cityName => dispatch(setCityName(cityName))
})   

const Form = ({ cityName, setCityName }) => {
    const {prevCityName, fetchWeather} = appStore

    console.log("Form")

    const updateCityName = (e) => {
        console.log('change', e.target.value)
        setCityName(e.target.value)  

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('cityName', cityName)

        if (prevCityName !== cityName && cityName) {   
            fetchWeather(appStore, {city: cityName})            
        }        
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            city name: {cityName}
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

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Form)


// import { connect } from 'react-redux'
// import { setCityName } from '../actions'
// import Form from './../components/Form'



// export default connect(
//     mapStateToProps, 
//     mapDispatchToProps
// )(Form)

