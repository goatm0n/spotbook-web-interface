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
      },
      userId: null,
    };
  }

  handleAuthToken = (authToken, userId) => {
    this.setState({authToken: authToken});
    this.setState({userId: userId});
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