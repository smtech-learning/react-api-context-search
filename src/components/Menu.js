import React from 'react'
import { Route, Link, BrowserRouter as Router , NavLink, Switch} from 'react-router-dom';
import Inventory from './Inventory';
import Error1 from './Error1';
import Sale from './Sale';
import Products from './Products';

 function Menu(props) {
  return (
      <div>
          <nav>
          <NavLink to='/inventory' className= "normalAnchorStyle" activeStyle={{color:'green'}}> Inventory |</NavLink>
          <NavLink to='/products' className= "normalAnchorStyle" activeStyle={{color:'green'}}> Products |</NavLink>
        <NavLink to='/sale' className="normalAnchorStyle" activeStyle={{ color: 'green' }}> Sale</NavLink>
        <NavLink to='/logout' className= "normalAnchorStyle" activeStyle={{color:'green'}}> Logout</NavLink>
        
      </nav>
  
    </div>
  )
 }
export default Menu;
