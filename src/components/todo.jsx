import React, { Component } from 'react';

class Todo extends Component {
    state = { 
        text: ""
     }
    render() { 
        return ( 
            <div>
                {
                    this.props.todo.editingMode?
                    <input type="text" value={this.state.text} onChange={(e)=>{this.setState({text: e.target.value})}} />:
                    <sapn>data</sapn>
                }
                <button>
                    {
                        this.props.todo.editingMode?
                        "save":"edit"
                    }
                </button>
                <button>Delete</button>
                <hr/>
            </div>
         );
    }
}
 
export default Todo;