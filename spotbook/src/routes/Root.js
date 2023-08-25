import React, {Component} from 'react';
import SpotNavBar from '../components/SpotNavBar';
import { Outlet } from 'react-router-dom';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authToken: {
        refresh: "",
        access: ""
      }
    };
  }

  handleAuthToken = (authToken) => {
    this.setState({authToken: authToken});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <SpotNavBar onLogin={ this.handleAuthToken } auth={ this.state.authToken.access } />

        <Outlet context={{auth: this.state.authToken.access}}/>
        

      </div>
    );
  }
  
}

export default Root;