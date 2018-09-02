import React, {Component} from 'react'
import appStore from './../stores/appStore'
import L from 'leaflet'


export default class extends Component {
    componentDidMount() {
        this.cityName = appStore.current.name
        this.location = [appStore.current.coord.lat, appStore.current.coord.lon]    
        this.locationAdjusted = [this.location[0] + 2, this.location[1]]
        this.layers = [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
        this.map = L.map('city-map', {
            center: this.locationAdjusted,
            zoom: 3,
            layers: this.layers
        })
        this.marker = L.marker(this.location).addTo(this.map)
        this.tooltip = this.marker
            .bindTooltip(this.cityName, {interactive: true})
            .on('hover', () => this.openTooltip()
        )            
    }

    render() {
        return <div id="city-map"></div>
    }
}
