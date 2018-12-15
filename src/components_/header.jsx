import React, { Component } from 'react';
import {} from '../actions/employeeActions';
import {connect} from 'react-redux';

class Header extends Component {
    state = { 
        text: ""
     }
    render() { 
        return ( 
            <div>
                <h1>{this.props.count}</h1>
                <input type="text" onChange={(e)=> this.setState({text: e.target.value})} />
                <button className="btn-primary" onClick={()=> this.props.addEmployee(this.state.text)}>ADD</button>
                <br/>
                <hr/>

                <ul>
                    {
                        this.props.data.addEmployee
                    }
                </ul>
            </div>
         );
    }
}
 
export default Header;