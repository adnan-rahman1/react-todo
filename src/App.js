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
          finished: true,
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList list={this.state.todos} />
      </div>
    )
  }
}

export default App;
