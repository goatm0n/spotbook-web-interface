import axios from "axios"
import { PROFILES_API_URL } from "../constants"
import UserBadge from "./UserBadge";
import { Col, Container, Row } from "reactstrap";
import { useOutletContext } from "react-router-dom";
import ClipFeed from "./ClipFeed";



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
    const clips = props.clips;
    const context = useOutletContext();
    const auth = context.auth;

    return (
        <article className="profile">
            <Container>
                <Row>
                    <Col>
                        <UserBadge userId={ profile.user } />
                    </Col>        
                    <Col>
                        <Row>
                            <h3>{ account.username }</h3>
                        </Row>
                        <Row>
                            <p>{ profile.full_name }</p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <p>{ profile.bio }</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClipFeed clip_id_list={clips} auth={auth} />
                    </Col>
                </Row>
            </Container>
            
        </article>
    )
} 