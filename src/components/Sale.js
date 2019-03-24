import React, { Component } from 'react'
import Menu from './Menu';

class Sale extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
            <Menu />
        </header>
        <div className ="container" >
              <h1> Sale Items</h1>
              <div className="template"> loremipsum </div>
              <div className="template"> loremipsum </div>
              <div className="template"> loremipsum </div>
          </div>
      </div>
    )
  }
}

export default Sale;
