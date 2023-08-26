import UserBadge from "./UserBadge"
import { Col } from "reactstrap"

export default function ClipHeader(props) {

    return (
        <>
            <Col>
                <UserBadge userId={ props.user }/>
            </Col>
            <Col>
                <h3 className="username">{ props.username }</h3>
            </Col>
        </>
    )
}