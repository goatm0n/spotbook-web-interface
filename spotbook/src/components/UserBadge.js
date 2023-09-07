import { Component } from "react";
import axios from "axios";
import { PROFILES_API_URL } from "../constants";
import './UserBadge.css'


export default function UserBadge(props) {


    return (
        <img src={ props.profile_picture } alt="user badge" className="profile-pic"/>
    )
    
}        