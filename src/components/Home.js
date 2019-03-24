import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';
import '../App.css';
import Menu from './Menu';
import Products from './Products';
import Inventory from './Inventory';
import Error from './Error';
import Sale from './Sale';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Menu />
        </header>
      </div>
    );
  }
}
export default Home;
