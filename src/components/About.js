import React from 'react'
import {view} from 'react-easy-state'
import './../styles/About.css'


const About = () => {
    return (
        <div className="About">
            <h1>About</h1>
            <p>
                Thanks for tying <b>Rain Drops</b> out! It's built using <a className="About-link" href="https://reactjs.org/">React</a>, <a className="About-link" href="https://github.com/solkimicreb/react-easy-state">React Easy State</a> and <a className="About-link" href="https://leafletjs.com/">leaflet</a>. All data is fetched from <a className="About-link" href="https://openweathermap.org/">OpenWeatherMap</a>. Created by <a className="About-link" href="https://github.com/josipovich">josipovich</a> and code is available on <a className="About-link" href="https://github.com/josipovich/rain-drops">GitHub</a>.
            </p>            
        </div>
    )
}

export default view(About)
