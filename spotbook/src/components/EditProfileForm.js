import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { PROFILES_API_URL } from "../constants";

class EditProfileForm extends React.Component {
    state = {
        user: "",
        full_name: "",
        bio: "",
    };

    componentDidMount() {
        if (this.props.profile) {
            const {user, full_name, bio} = this.props.profile;
            this.setState({user, full_name, bio});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    editProfile = e => {

    }

    render() {
        return (
            <Form onSubmit={this.editProfile}>
                <FormGroup>
                    <Label for="full_name">Full name:</Label>
                    <Input
                        type="text"
                        name="full_name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.full_name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="bio">Bio:</Label>
                    <Input
                        type="text"
                        name="bio"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.bio)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
            
        );
    }
}

export default EditProfileForm;