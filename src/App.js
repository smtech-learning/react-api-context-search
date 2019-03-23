import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';
import Products from './components/Products';
import Inventory from './components/Inventory';
import Sale from './components/Sale';


class App extends Component {
  constructor(props) {
    super(props)

   
  }
  
   state = {
     products: [],
     inventory: [],
     saleitems: []
     
  }

  render() {

    
    const name = "suresh";
    return (
     
      <div className="App">
      <Router>
        <header className="App-header">
            <Menu />
        </header>
        <div>
       
          
           
            <span> <Route path='/sale'  exact strict component={Sale} /> </span>
              
            <span> <Route path='/products'  exact strict component={Products}/> </span>
              
            <span> <Route path='/inventory' exact  strict component={Inventory}/> </span>
              
         
        
        
        </div> 
        </Router>
      </div>
    );
  }
}

export default App;
