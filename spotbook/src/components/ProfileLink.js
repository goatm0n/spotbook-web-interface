import { Link } from "react-router-dom";
import UserBadge from "./UserBadge";


export default function ProfileLink(props) {


    return (
        <Link to={ "../profile/" + props.userId }>
            <UserBadge userId={props.userId}/>
        </Link>
    )
}