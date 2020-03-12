import React, { Component } from 'react';

export class ListItem extends Component {


    render() {
        return (
            <div>
                <h4>Item: {this.props.item}</h4>
                <p>Priority: {this.props.priority}</p>
            </div>
        );
    }
}

export default ListItem;
