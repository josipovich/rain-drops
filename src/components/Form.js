import React from 'react'
import PropTypes from 'prop-types'
import { view } from 'react-easy-state'
import './../styles/Form.css'


const Form = ({handleChange, handleSubmit}) => {
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

Form.propTypes = {
      handleChange: PropTypes.func.isRequired
    , handleSubmit: PropTypes.func.isRequired
}

export default view(Form)
