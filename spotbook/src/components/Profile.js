import axios from "axios"
import { PROFILES_API_URL } from "../constants"



export async function getProfile(id) {
    const url = PROFILES_API_URL + "user-id-detail/" + id;
    const res =  await axios.get(url);
    const profile = res.data;
    return { profile };
}

export async function getProfilePicture(userId) {
    const url = PROFILES_API_URL + "profile-picture/" + userId;
    const res =  await axios.get(url);
    const profile_picture = res.data;
    return { profile_picture };
}

export default function Profile(props) {

    const profile = props.profile;
    const account = props.account;

    return (
        <h3>{account.username}</h3>
    )
} 