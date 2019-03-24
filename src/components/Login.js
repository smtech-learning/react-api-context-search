import React, { Component } from 'react'
import logo from './sitelogo.png'
import { browserHistory } from 'history'
import { Route  } from 'react-router-dom';
import Home from './Home';


class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    loggedIn: false,
  };
  
  handleLogin() {
    this.props.history.push("/home");
    console.log('testing');
  };

  render() {
      return (
        <div> 
              <div className="panel">
                  <div className="left-panel"> 
                    <img src={logo} className= "helper" width="460" height="345" />
                  </div>
                  
                  <div className="right-panel"> 
                    <span className="input-group-btn">

                    <button onClick={this.handleLogin}>Login</button>

                    </span>
                  </div>
              </div>
        </div>
      )
    }
  }

export default  Login; 