import React from 'react'
import appStore from './../stores/appStore'
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet'


export default props => {
    const cityName = appStore.current.name
    const location = [appStore.current.coord.lat, appStore.current.coord.lon]    
    const locationAdjusted = [location[0] + 2, location[1]]
    return (
        <Map center={locationAdjusted} zoom={3}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location} opacity={.85}>
                <Tooltip direction="top">{cityName}</Tooltip>
            </Marker>
        </Map>
    )
}
