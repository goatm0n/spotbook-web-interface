import { CLIPS_API_URL } from "../constants";
import axios from "axios";
import './Clip.css';
import { Col, Container, Row } from "reactstrap";
import LikeToggleButton from "./LikeToggleButton";
import CommentButton from "./CommentButton";
import ShareButton from "./ShareButton";
import SaveButton from "./SaveButton";
import LikesModal from "./LikesModal";
import CommentSection from "./CommentSection";
import ClipTextContent from "./ClipTextContent";
import ClipImage from './ClipImage'
import ClipHeader from "./ClipHeader";

export async function getClip(id) {
    const url = CLIPS_API_URL + "detail/" + id;
    const res =  await axios.get(url);
    const clip = res.data;
    return { clip };
}

export default function Clip(props) {

    const clip = props.clip;

    return (
        <article className="clip">
            <Container>
                <Row>
                    <ClipHeader user={clip.user} username={clip.username} />
                </Row>
                <Row>
                    <Col>
                        <ClipImage />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClipTextContent textContent={clip.textContent} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LikeToggleButton type="clip" id={clip.id} auth={props.auth} />
                    </Col>
                    <Col>
                        <CommentButton auth={props.auth} />
                    </Col>
                    <Col>
                        <ShareButton auth={props.auth} />
                    </Col>
                    <Col>
                        <SaveButton auth={props.auth} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LikesModal name='Likes' id={clip.id} type='clip' count={clip.likes.length} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CommentSection />
                    </Col>
                </Row>
            </Container>
            
        </article>
    )
}