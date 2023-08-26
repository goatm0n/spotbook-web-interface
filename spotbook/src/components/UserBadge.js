import { Component } from "react";
import axios from "axios";
import { PROFILES_API_URL } from "../constants";
import './UserBadge.css'



export default class UserBadge extends Component {

    state = {
        profile_picture: {},
    }

    getProfilePicture = () => {
        if (!this.props.user) {
        }
        axios.get(PROFILES_API_URL + "profile-picture/" + this.props.userId)
            .then(res => this.setState({profile_picture: res.data.src}))
            .catch((err) => {
                this.resetState();
                /* ^^^This could be dangerous
                console.log(err); */
            });    
    }

    resetState = () => {
        this.getProfilePicture();
    }

    componentDidMount() {
        this.resetState();
    }

    render() {
        const profile_picture = this.state.profile_picture;
        
        return (
            <img src={ profile_picture } alt="user badge" className="profile-pic"/>
        )
    }
}