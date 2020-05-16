import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

import {v4 as uuid} from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }  
        return todo;
      })
    });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title, 
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  {
                    /* For app.js todos is a state.
                    Now, we are passing it to todos component as props (property).
                    Then, for todos component, it will be a prop, not a state. */
                  }
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} 
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
