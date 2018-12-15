import React, { Component } from 'react';
import {addEmployee} from '../actions/employeeActions';
import connect from 'redux';

class Header extends Component {
    state = { 
        text: ""
     }
    render() { 
        return ( 
            <div>
                <h1>{this.props.count}</h1>
                <input type="text" onChange={(e)=> this.setState({text: e.target.value})}/>
                <button onClick={()=> this.props.addEmployee(this.state.text)}>ADD</button>
                <br/>
                <br/>
                <br/>
                <br/>

                <ul>
                    {
                        this.props.data.employeeList.map(d=> <li>{d}</li>)
                    }
                </ul>
            </div>
         );
    }
}
 
const mapStateToProps = state =>({
    data: state.employeeReducer,
    count: state.employeeReducer.count
});

export default (mapStateToProps, {addEmployee})(Header);