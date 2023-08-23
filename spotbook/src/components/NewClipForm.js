import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { CLIPS_API_URL } from "../constants";

class NewClipForm extends Component {
    state = {
        textContent: "",
        spot: "",
        auth: "",
    };

    componentDidMount() {
        if (this.props.spot) {
            const spot = this.props.spot;
            this.setState({spot});
        }
        if (this.props.auth) {
            const accessString = this.props.auth;
            const auth = "Bearer " + accessString;
            this.setState({auth})
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    create = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: CLIPS_API_URL + "create/",
            headers: {
                Authorization: this.state.auth
            },
            data: {
                spot: this.state.spot,
                textContent: this.state.textContent
            }
        });
    };

    render () {
        return (
            <Form onClick={this.create}>
                <FormGroup>
                    <Label for="spot">Spot:</Label>
                    <Input
                        type="text"
                        name="spot"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.spot)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="textContent">TextContent:</Label>
                    <Input
                        type="text"
                        name="textContent"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.textContent)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewClipForm;