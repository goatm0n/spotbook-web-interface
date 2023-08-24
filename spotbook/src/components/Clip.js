import { CLIPS_API_URL } from "../constants";
import axios from "axios";
import './Clip.css';
import { Col, Container, Row } from "reactstrap";

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
                    <Col>
                        <h1>{ clip.username }</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="placeholder"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Like Icon
                    </Col>
                    <Col>
                        Comment Icon
                    </Col>
                    <Col>
                        Share Icon
                    </Col>
                    <Col>
                        Save Icon
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Likes
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{ clip.textContent }</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Comments
                    </Col>
                </Row>
            </Container>
            
        </article>
    )
}