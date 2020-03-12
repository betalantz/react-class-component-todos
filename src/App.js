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


  render() {
    return (
      <div className="App">
        <h1>Todos:</h1>
        <Form 
          submitCallback={this.handleFormSubmit}
          inputs={["Item", "Priority"]} 
          submitValue={"New Todo"}/>
        <List todos={this.state.todos} />
      </div>
    )
  }
}


export default App;
