import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';
import Form from './Form';

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos: [
        {
          item: "Learn React",
          priority: "High",
          id: "Learn ReactHigh"
        }
      ]
    }
  }

  handleFormSubmit = ([newItem, newPriority]) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          item: newItem,
          priority: newPriority,
          id: `${newItem}${newPriority}`
        }
      ]
    });
  };

  handleItemDelete = id => {
    console.log(id);
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos: newTodos})
  }


  render() {
    return (
      <div className="App">
        <h1>Todos:</h1>
        <Form 
          submitCallback={this.handleFormSubmit}
          // inputs={["Item", "Priority"]} 
          // submitValue={"New Todo"}
          />
        <List 
          todos={this.state.todos}
          handleDelete={this.handleItemDelete}
        />
      </div>
    )
  }
}


export default App;
