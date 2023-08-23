import React from "react";
import { Marker, Popup } from "react-leaflet";


function SpotMarker(props) {

    const spot = props.spot;

    const coords = spot.geometry.coordinates;
    const position = [coords[1], coords[0]];
    const title = spot.properties.title;
    const spotType = spot.properties.spotType;
    const description = spot.properties.description;

    return (
        <Marker position={ position } >
            <Popup> 
                <b>{title}</b>
                <br />
                {spotType}
                <br />
                {description}
            </Popup>    
        </ Marker>
    );
}

export default SpotMarker;