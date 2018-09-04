import React from 'react'
import {view} from 'react-easy-state'
import PropTypes from 'prop-types'
import './../styles/About.css'


const About = ({appName, headerText}) => {
    return (
        <div className="About">
            <h1>{headerText}</h1>
            <p>Thanks for tying <b>{appName}</b> out! It's built using <a className="About-link" href="https://reactjs.org/">React</a>, <a className="About-link" href="https://github.com/solkimicreb/react-easy-state">React Easy State</a> and <a className="About-link" href="https://leafletjs.com/">leaflet</a>. All data is fetched from <a className="About-link" href="https://openweathermap.org/">OpenWeatherMap</a>. Created by <a className="About-link" href="https://github.com/josipovich">josipovich</a> and code is available on <a className="About-link" href="https://github.com/josipovich/rain-drops">GitHub</a>.</p>            
        </div>
    )
}

About.propTypes = {
      appName: PropTypes.string.isRequired
    , headerText: PropTypes.string.isRequired
}

export default view(About)
