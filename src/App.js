import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import Inventory from './components/Inventory';
import Error1 from './components/Error1';
import Sale from './components/Sale';
import Test from './components/Test';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact   component={Login} /> 
          <Route path='/home' component={Home} />
          <Route path='/products'   exact component={Products}/> 
            <Route path='/sale'   exact    component={Sale} /> 
          <Route path='/inventory' exact component={Inventory} /> 
          <Route path="/logout" component={Test}/>
            <Route path="" component={Error1} /> 
              
         </Switch>
        </Router>
    );
  }
}
export default App;
