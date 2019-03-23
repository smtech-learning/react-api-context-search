import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';



 function Menu(props) {
  return (
    <div>
          <nav>
          <Link to='/inventory'> Inventory |</Link>
              
              <Link to='/products'> Products |</Link>
              <Link to='/sale'> Sale</Link>

             
          </nav>
    </div>
  )
 }

export default Menu;
