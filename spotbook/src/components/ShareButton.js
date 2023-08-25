import { Fragment } from "react";
import { Button } from "reactstrap";


export default function ShareButton(props) {

    let button = <Button></Button>
        if (props.auth === "") {
            button = <Button
                color="secondary"
                className="float-right"
                onClick={function(){alert("login")}}
            >
                Share
            </Button>
        } else {
            button = (
                <Button
                    color="primary"
                    className="float-right"
                >
                    Share
                </Button>
            );
        }

    return (
        <Fragment>
            { button }
        </Fragment>
    )
}