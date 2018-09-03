import React from 'react'
import {view} from 'react-easy-state'


const About = () => {
    return (
        <div className="About">
            {/* <h1>About</h1> */}
            <p>I've built Rain-Drops in order to try <a href="#">React</a> out.</p>
        </div>
    )
}

export default view(About)
