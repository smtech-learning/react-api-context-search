import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import Inventory from './components/Inventory';
import Error from './components/Error';
import Sale from './components/Sale';

class App extends Component {
  render() {
    return (
      <Router>
        <switch>
           <Route path='/' exact   component={Login} /> 
          <Route path='/home' component={Home}/>
              <Route path='/sale'      component={Sale} /> 
              <Route path='/products'    component={Products}/> 
              <Route path='/inventory'  component={Inventory} /> 
            <Route path='*'            component={Error} /> 
         </switch>
      </Router>
    );
  }
}
export default App;
