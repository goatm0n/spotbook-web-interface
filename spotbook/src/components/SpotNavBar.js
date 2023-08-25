import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import './SpotNavBar.css';
import { Component } from "react";
import LoginModal from "./LoginModal";
import EditProfileModal from "./EditProfileModal";
import ProfilesModal from "./ProfilesModal";
import ModalCollection from "./ModalCollection";

import { Link } from "react-router-dom";


class SpotNavBar extends Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Navbar>
                <Link to="../../" relative="path" className="homepage-link">
                    <NavbarBrand>
                        spotbook
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={ this.toggleNavbar } />
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    <Nav navbar>
                        <NavItem>
                            <LoginModal onLogin={ this.props.onLogin }/>
                        </NavItem>
                        <NavItem>
                            <EditProfileModal />
                        </NavItem>
                        <NavItem>
                            <ProfilesModal auth={ this.props.auth } />
                        </NavItem>
                        <NavItem>
                            <ModalCollection onLogin={ this.props.onLogin } auth={ this.props.auth } />
                        </NavItem>
                        <NavItem>
                            <NavLink href="profile/">
                                profile
                            </NavLink>
                        </NavItem>
                    </Nav>
                
                </Collapse>
            </Navbar>
        )
    }
    
}

export default SpotNavBar;