import React, { Component } from 'react';

export class Form extends Component {

    constructor() {
        super();
        this.state = {
          itemInput: "",
          priorityInput: ""
        };
      }
    
      handleItemChange = e => {
        console.log(e.target.value);
        this.setState({ itemInput: e.target.value });
      };
    
      handlePriorityChange = e => {
        console.log(e.target.value);
        this.setState({ priorityInput: e.target.value });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.setState({
          itemInput: "",
          priorityInput: ""
        });
        this.props.submitCallback([this.state.itemInput, this.state.priorityInput]);
      };
    
      render() {
        return (
          <form>
            <input
              type="text"
              value={this.state.itemInput}
              placeholder="item"
              onChange={e => this.handleItemChange(e)}
            />
            <input
              type="text"
              value={this.state.priorityInput}
              placeholder="priorty"
              onChange={e => this.handlePriorityChange(e)}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Add todo
            </button>
          </form>
        );
      }
}

export default Form;
