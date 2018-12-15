import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {
                    this.props.todolist.map(t=><Todo todo={t}/>)
                }
            </div>
         );
    }
}
 
export default TodoList;