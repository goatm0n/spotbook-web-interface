import './App.css';
import React, {Component} from 'react';
import ModalCollection from './components/ModalCollection';
import SpotMap from './components/SpotMap';
import { Container, Row, Col } from 'reactstrap';
import SpotNavBar from './components/SpotNavBar';

class App extends Component {

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
        
        <SpotMap />
        

      </div>
    );
  }
  
}

export default App;
