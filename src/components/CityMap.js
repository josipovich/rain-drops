import React from 'react'
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet'


export default props => {
    const locationAdjusted = [props.location[0] + 2, props.location[1]]
    return (
        <Map center={locationAdjusted} zoom={3}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.location} opacity={.85}>
                <Tooltip direction="top">{props.cityName}</Tooltip>
            </Marker>
        </Map>
    )
}
