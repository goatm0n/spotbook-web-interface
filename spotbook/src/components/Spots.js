import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SpotList from "./SpotList";
import axios from "axios";
import { SPOTS_API_URL } from "../constants";

class Spots extends Component {
    state = {
        spots: []
    };

    componentDidMount() {
        this.resetState();
    }

    getSpots = () => {
        if (this.props.spots) {
            this.setState({spots: this.props.spots})
        } else {
            axios.get(SPOTS_API_URL + "list/").then((res) => this.setState({spots: res.data.features}));
        }
    }

    resetState = () => {
        this.getSpots();
    }

    render() {
        return (
            <Container style={{marginTop: "20px"}}>
                <Row>
                    <Col>
                        <SpotList
                            spots={this.state.spots}
                            resetState={this.resetState}
                            auth={this.props.auth}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Spots;