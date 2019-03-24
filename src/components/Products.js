import React, { Component } from 'react'
import Menu from './Menu';

class Products extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
          <Menu />
      </header>
            <h1> Products  !!</h1>
        {console.log('test')}
        <div className="container">
          <div className="jumbotron">
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum
          </div>
          <table className="table">
          <thead>
            <tr>
              <th> Employee Name</th>
              <th> Employee Age</th>
              <th>Employee Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row"> dfdsfdsfds</td>
              <td> dfdsfdsfds</td>
              <td> dfsdfdsfds</td>
            </tr>
            <tr>
              <td scope="row">dfdsfdsfds</td>
              <td> dfsdfdsfds</td>
              <td> dfsdfdsfs</td>
            </tr>
          </tbody>
          </table>
         
        </div>
        

      </div>
    )
  }
}

export default Products;
