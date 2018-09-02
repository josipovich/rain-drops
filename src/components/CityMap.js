import React, {Component} from 'react'
import L from 'leaflet'
import {view} from 'react-easy-state'


class CityMap extends Component {
    componentDidMount() {
        this.locationAdjusted = [this.props.location[0] + 2, this.props.location[1]]
        this.layers = [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
        this.map = L.map('city-map', {
              center: this.locationAdjusted
            , zoom: 3
            , layers: this.layers
        })
        this.marker = L.marker(this.props.location).addTo(this.map)
        this.tooltip = this._addTooltip(this.props.cityName)           
    }

    componentDidUpdate({location, cityName}) {  
        this.locationAdjusted = [location[0] + 2, location[1]]  
        this.map.setView(this.locationAdjusted)
        this.marker.setLatLng(location)
        this.tooltip = this._addTooltip(cityName) 
    }

    _addTooltip(cityName) {
        return this.marker
            .bindTooltip(cityName, {interactive: true})
            .on('hover', () => this.openTooltip()
        ) 
    }

    render() {
        return <div id="city-map"></div>
    }
}   

export default view(CityMap)