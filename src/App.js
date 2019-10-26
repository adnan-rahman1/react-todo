import React from 'react';
import './App.css';
import TodoList from './todolist/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: "get up early in the morning",
          finished: false,
        },
        {
          id: 2,
          title: "take your breakfast",
          finished: false,
        },
        {
          id: 3,
          title: "ready for your school",
          finished: false,
        }
      ]
    }
  }

  // todos are complete or not functionality
  todoHandler = (id) => {
    let { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if(todo.id === id) {
          todo.finished = !todo.finished;
        }
        return todo;
      })
    })
  }


  // delete todos functionality
  btnHandler = (id) => {
    let { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList list={this.state.todos} todoHandler={this.todoHandler} btnHandler={this.btnHandler}/>
      </div>
    )
  }
}

export default App;
