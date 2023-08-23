import React, { Component } from "react";
import { Popup } from "react-leaflet";
import axios from "axios";
import { ACCOUNTS_API_URL } from "../constants";


class SpotPopup extends Component {

    state = {
        username: "",
    }

    getUsername = () => {
        axios.get(ACCOUNTS_API_URL + "username/" + this.props.spot.properties.user)
            .then(res => this.setState({username: res.data}))
            .catch((err) => console.log(err));
        
    }

    resetState = () => {
        this.getUsername();
    }

    componentDidMount() {
        this.resetState();
    }


    render() {
        const spot = this.props.spot;
        const title = spot.properties.title;
        const spotType = spot.properties.spotType;
        const description = spot.properties.description;
        const userId = spot.properties.user;
        

        return (
            <Popup> 
                <b>{title}</b>
                <br />
                {spotType}
                <br />
                {description}
                <br />
                <a href={ "user/" + userId }>{this.state.username}</a>
            </Popup>
        )
    }
    
}

export default SpotPopup;