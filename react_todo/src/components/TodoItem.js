import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#d4d4d4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> 
                    {'  '} { this.props.todo.title }
                    <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

// We can do like this also, but here we are doing by using function
// const itemStyle = {
//     backgroundColor: '#d4d4d4'
// }

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
