import React, { Component } from 'react'
import Menu from './Menu';

class Inventory extends Component {

    state = {
        data: [],
        loaded:false
    }

    componentDidMount() {
        const fetchUrlTypeCode = 'http://dummy.restapiexample.com/api/v1/employees';
        fetch(fetchUrlTypeCode)
            .then(res => res.json())
            .then((data) => console.log(data) | this.setState({ data: data }))
        
        this.setState({ loaded : true});

    }
 
    render() {
        return (
            <div> 
            <header className="App-header">
                <Menu />
            </header>
                
            <div className="container">
                    <h1> Inventory</h1>
                    <table className="table table-hover">
                    <tr className="row"> 
                        {this.state.data.map((data,index) => {
                            return (
                                <p>{data.employee_name} </p>
                            )
                        })}
                        </tr>
                    </table>
                    {!this.state.loaded || <div className="spinner-border text-primary"></div>}
                </div>
        </div>
        )
  }
}

export default Inventory;
