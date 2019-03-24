import React from 'react'
import { Route, Link, BrowserRouter as Router , NavLink} from 'react-router-dom';

 function Menu(props) {
  return (
      <div>
          <nav>
          <NavLink to='/inventory' className= "normalAnchorStyle" activeStyle={{color:'green'}}> Inventory |</NavLink>
          <NavLink to='/products' className= "normalAnchorStyle" activeStyle={{color:'green'}}> Products |</NavLink>
           <NavLink to='/sale' className= "normalAnchorStyle" activeStyle={{color:'green'}}> Sale</NavLink>
          </nav>
    </div>
  )
 }
export default Menu;
